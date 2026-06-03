-- =============================================================================
-- LPU QUEUEING SYSTEM — PostgreSQL Database Design
-- =============================================================================
-- Feature mapping:
--   1. Customer Queuing Form     → service_types, queue_transactions, students,
--                                  queue_ticket_prints
--   2. Teller Trigger Page       → users, user_sessions, windows,
--                                  user_window_assignments, queue_transactions,
--                                  queue_transfers, queue_logs
--   3. Customer Display Board    → window_display_state, media_playlist,
--                                  announcements, voice_notifications,
--                                  display_board_settings
-- =============================================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- =============================================================================
-- REFERENCE: SERVICE TYPES (Cashier / Registrar)
-- =============================================================================

CREATE TABLE service_types (
    service_type_code VARCHAR(20) PRIMARY KEY,
    display_name      VARCHAR(50) NOT NULL,
    queue_prefix      CHAR(1) NOT NULL,
    is_active         BOOLEAN DEFAULT TRUE
);

INSERT INTO service_types (service_type_code, display_name, queue_prefix)
VALUES
    ('CASHIER',   'Cashier',   'C'),
    ('REGISTRAR', 'Registrar', 'R');

-- =============================================================================
-- USERS (Teller / Admin login)
-- =============================================================================

CREATE TABLE users (
    user_id       SERIAL PRIMARY KEY,
    username      VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name     VARCHAR(100) NOT NULL,
    role          VARCHAR(20) NOT NULL DEFAULT 'TELLER'
        CHECK (role IN ('ADMIN', 'TELLER')),
    is_active     BOOLEAN DEFAULT TRUE,
    created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =============================================================================
-- USER SESSIONS (Teller login sessions)
-- =============================================================================

CREATE TABLE user_sessions (
    session_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id       INTEGER NOT NULL,
    ip_address    INET,
    user_agent    TEXT,
    logged_in_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    logged_out_at TIMESTAMP,
    expires_at    TIMESTAMP,
    is_active     BOOLEAN DEFAULT TRUE,

    CONSTRAINT fk_session_user
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- =============================================================================
-- WINDOWS (Cashier / Registrar teller windows)
-- =============================================================================

CREATE TABLE windows (
    window_id      SERIAL PRIMARY KEY,
    window_number  INTEGER NOT NULL,
    window_name    VARCHAR(50) NOT NULL,
    service_type   VARCHAR(20) NOT NULL,
    status         VARCHAR(20) NOT NULL DEFAULT 'OPEN'
        CHECK (status IN ('OPEN', 'CLOSED')),
    created_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_window_service_type
        FOREIGN KEY (service_type) REFERENCES service_types(service_type_code),
    CONSTRAINT uq_window_number_per_service
        UNIQUE (service_type, window_number)
);

-- =============================================================================
-- USER ↔ WINDOW ASSIGNMENTS (which teller works which window)
-- =============================================================================

CREATE TABLE user_window_assignments (
    assignment_id SERIAL PRIMARY KEY,
    user_id         INTEGER NOT NULL,
    window_id       INTEGER NOT NULL,
    is_active       BOOLEAN DEFAULT TRUE,
    assigned_at     TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    released_at     TIMESTAMP,

    CONSTRAINT fk_assignment_user
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_assignment_window
        FOREIGN KEY (window_id) REFERENCES windows(window_id) ON DELETE CASCADE
);

CREATE UNIQUE INDEX uq_active_user_assignment
    ON user_window_assignments (user_id)
    WHERE is_active = TRUE;

CREATE UNIQUE INDEX uq_active_window_assignment
    ON user_window_assignments (window_id)
    WHERE is_active = TRUE;

-- =============================================================================
-- STUDENTS (student registry — linked by student_id on queue form)
-- =============================================================================

CREATE TABLE students (
    student_id   VARCHAR(20) PRIMARY KEY,
    first_name   VARCHAR(50) NOT NULL,
    middle_name  VARCHAR(50),
    last_name    VARCHAR(50) NOT NULL,
    course       VARCHAR(100),
    year_level   VARCHAR(20),
    email        VARCHAR(100),
    created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =============================================================================
-- DAILY QUEUE NUMBER COUNTERS (per service type, resets each business day)
-- =============================================================================

CREATE TABLE queue_daily_counters (
    counter_id    SERIAL PRIMARY KEY,
    business_date DATE NOT NULL,
    service_type  VARCHAR(20) NOT NULL,
    last_number   INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT fk_counter_service_type
        FOREIGN KEY (service_type) REFERENCES service_types(service_type_code),
    CONSTRAINT uq_counter_date_service
        UNIQUE (business_date, service_type)
);

-- =============================================================================
-- QUEUE TRANSACTIONS (service type, name, student id, request)
-- =============================================================================

CREATE TABLE queue_transactions (
    queue_id         BIGSERIAL PRIMARY KEY,
    queue_number     VARCHAR(20) NOT NULL,
    service_type     VARCHAR(20) NOT NULL,
    student_id       VARCHAR(20),
    customer_name    VARCHAR(150) NOT NULL,
    request_details  TEXT,
    status           VARCHAR(20) NOT NULL DEFAULT 'WAITING'
        CHECK (status IN (
            'WAITING',
            'CALLED',
            'SERVING',
            'COMPLETED',
            'TRANSFERRED',
            'CANCELLED',
            'NO_SHOW'
        )),
    window_id        INTEGER,
    called_count     INTEGER NOT NULL DEFAULT 0,
    created_at       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    called_at        TIMESTAMP,
    serving_at       TIMESTAMP,
    completed_at     TIMESTAMP,

    CONSTRAINT fk_queue_service_type
        FOREIGN KEY (service_type) REFERENCES service_types(service_type_code),
    CONSTRAINT fk_queue_student
        FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE SET NULL,
    CONSTRAINT fk_queue_window
        FOREIGN KEY (window_id) REFERENCES windows(window_id) ON DELETE SET NULL
);

CREATE UNIQUE INDEX uq_queue_number_per_day
    ON queue_transactions (queue_number, (created_at::DATE));

-- =============================================================================
-- QUEUE TRANSFERS (teller: transfer queue to another window)
-- =============================================================================

CREATE TABLE queue_transfers (
    transfer_id     BIGSERIAL PRIMARY KEY,
    queue_id        BIGINT NOT NULL,
    from_window_id  INTEGER NOT NULL,
    to_window_id    INTEGER NOT NULL,
    transferred_by  INTEGER NOT NULL,
    remarks         TEXT,
    transferred_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_transfer_queue
        FOREIGN KEY (queue_id) REFERENCES queue_transactions(queue_id) ON DELETE CASCADE,
    CONSTRAINT fk_transfer_from_window
        FOREIGN KEY (from_window_id) REFERENCES windows(window_id),
    CONSTRAINT fk_transfer_to_window
        FOREIGN KEY (to_window_id) REFERENCES windows(window_id),
    CONSTRAINT fk_transfer_user
        FOREIGN KEY (transferred_by) REFERENCES users(user_id)
);

-- =============================================================================
-- QUEUE LOGS (call next, recall current, recall last, complete, etc.)
-- =============================================================================

CREATE TABLE queue_logs (
    log_id      BIGSERIAL PRIMARY KEY,
    queue_id    BIGINT NOT NULL,
    window_id   INTEGER,
    action_type VARCHAR(30) NOT NULL
        CHECK (action_type IN (
            'GENERATED',
            'TICKET_PRINTED',
            'CALLED',
            'RECALLED',
            'RECALL_LAST',
            'SERVING',
            'COMPLETED',
            'TRANSFERRED',
            'CANCELLED',
            'NO_SHOW'
        )),
    user_id     INTEGER,
    remarks     TEXT,
    created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_log_queue
        FOREIGN KEY (queue_id) REFERENCES queue_transactions(queue_id) ON DELETE CASCADE,
    CONSTRAINT fk_log_window
        FOREIGN KEY (window_id) REFERENCES windows(window_id) ON DELETE SET NULL,
    CONSTRAINT fk_log_user
        FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL
);

-- =============================================================================
-- QUEUE TICKET PRINTS (auto-print queue ticket on request)
-- =============================================================================

CREATE TABLE queue_ticket_prints (
    print_id      BIGSERIAL PRIMARY KEY,
    queue_id      BIGINT NOT NULL,
    printer_name  VARCHAR(100),
    status        VARCHAR(20) NOT NULL DEFAULT 'PENDING'
        CHECK (status IN ('PENDING', 'PRINTED', 'FAILED')),
    printed_at    TIMESTAMP,
    error_message TEXT,
    created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_print_queue
        FOREIGN KEY (queue_id) REFERENCES queue_transactions(queue_id) ON DELETE CASCADE
);

-- =============================================================================
-- WINDOW DISPLAY STATE (display board — currently serving per window)
-- =============================================================================

CREATE TABLE window_display_state (
    window_id                INTEGER PRIMARY KEY,
    current_queue_id         BIGINT,
    current_queue_number     VARCHAR(20),
    last_called_queue_id     BIGINT,
    last_called_queue_number VARCHAR(20),
    updated_at               TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_display_window
        FOREIGN KEY (window_id) REFERENCES windows(window_id) ON DELETE CASCADE,
    CONSTRAINT fk_display_current_queue
        FOREIGN KEY (current_queue_id) REFERENCES queue_transactions(queue_id) ON DELETE SET NULL,
    CONSTRAINT fk_display_last_called_queue
        FOREIGN KEY (last_called_queue_id) REFERENCES queue_transactions(queue_id) ON DELETE SET NULL
);

-- =============================================================================
-- VOICE NOTIFICATIONS (display board voice announcements)
-- =============================================================================

CREATE TABLE voice_notifications (
    notification_id BIGSERIAL PRIMARY KEY,
    queue_id        BIGINT NOT NULL,
    window_id       INTEGER NOT NULL,
    queue_number    VARCHAR(20) NOT NULL,
    message_text    TEXT,
    played_at       TIMESTAMP,
    status          VARCHAR(20) NOT NULL DEFAULT 'PENDING'
        CHECK (status IN ('PENDING', 'PLAYED', 'SKIPPED', 'FAILED')),
    created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_notification_queue
        FOREIGN KEY (queue_id) REFERENCES queue_transactions(queue_id) ON DELETE CASCADE,
    CONSTRAINT fk_notification_window
        FOREIGN KEY (window_id) REFERENCES windows(window_id) ON DELETE CASCADE
);

-- =============================================================================
-- MEDIA PLAYLIST (display board video widget)
-- =============================================================================

CREATE TABLE media_playlist (
    media_id         SERIAL PRIMARY KEY,
    title            VARCHAR(150),
    file_name        VARCHAR(255) NOT NULL,
    file_path        TEXT NOT NULL,
    media_type       VARCHAR(20) NOT NULL DEFAULT 'VIDEO'
        CHECK (media_type IN ('VIDEO', 'IMAGE')),
    duration_seconds INTEGER,
    sort_order       INTEGER NOT NULL DEFAULT 0,
    is_active        BOOLEAN DEFAULT TRUE,
    uploaded_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =============================================================================
-- ANNOUNCEMENTS (scrolling text on display board)
-- =============================================================================

CREATE TABLE announcements (
    announcement_id SERIAL PRIMARY KEY,
    title           VARCHAR(100) NOT NULL,
    content         TEXT NOT NULL,
    is_active       BOOLEAN DEFAULT TRUE,
    starts_at       TIMESTAMP,
    ends_at         TIMESTAMP,
    created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- =============================================================================
-- DISPLAY BOARD SETTINGS (clock, video, voice toggles)
-- =============================================================================

CREATE TABLE display_board_settings (
    setting_key   VARCHAR(50) PRIMARY KEY,
    setting_value TEXT NOT NULL,
    description   VARCHAR(255),
    updated_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO display_board_settings (setting_key, setting_value, description)
VALUES
    ('voice_enabled',         'true', 'Enable voice notifications on display board'),
    ('show_clock',            'true', 'Show time and date widget'),
    ('video_autoplay',        'true', 'Autoplay active media playlist'),
    ('board_refresh_seconds', '3',    'Polling interval for display board updates');

-- =============================================================================
-- SEED: DEFAULT WINDOWS
-- =============================================================================

INSERT INTO windows (window_number, window_name, service_type)
VALUES
    (1, 'Cashier Window 1',   'CASHIER'),
    (2, 'Cashier Window 2',   'CASHIER'),
    (3, 'Registrar Window 1', 'REGISTRAR'),
    (4, 'Registrar Window 2', 'REGISTRAR');

INSERT INTO window_display_state (window_id)
SELECT window_id FROM windows;

-- =============================================================================
-- INDEXES
-- =============================================================================

CREATE INDEX idx_queue_status ON queue_transactions(status);
CREATE INDEX idx_queue_service_type ON queue_transactions(service_type);
CREATE INDEX idx_queue_created_at ON queue_transactions(created_at);
CREATE INDEX idx_queue_window ON queue_transactions(window_id);
CREATE INDEX idx_queue_student ON queue_transactions(student_id);
CREATE INDEX idx_queue_waiting_list
    ON queue_transactions(service_type, created_at)
    WHERE status = 'WAITING';

CREATE INDEX idx_logs_queue ON queue_logs(queue_id);
CREATE INDEX idx_logs_action ON queue_logs(action_type, created_at);
CREATE INDEX idx_transfer_queue ON queue_transfers(queue_id);
CREATE INDEX idx_sessions_user ON user_sessions(user_id) WHERE is_active = TRUE;
CREATE INDEX idx_voice_pending ON voice_notifications(status) WHERE status = 'PENDING';
CREATE INDEX idx_ticket_prints_pending ON queue_ticket_prints(status) WHERE status = 'PENDING';

-- =============================================================================
-- HELPER FUNCTION: Generate next queue number (daily reset per service)
-- =============================================================================

CREATE OR REPLACE FUNCTION generate_queue_number(p_service_type VARCHAR(20))
RETURNS VARCHAR(20)
LANGUAGE plpgsql
AS $$
DECLARE
    v_date      DATE := CURRENT_DATE;
    v_prefix    CHAR(1);
    v_next      INTEGER;
    v_formatted VARCHAR(20);
BEGIN
    SELECT queue_prefix INTO v_prefix
    FROM service_types
    WHERE service_type_code = p_service_type AND is_active = TRUE;

    IF v_prefix IS NULL THEN
        RAISE EXCEPTION 'Invalid or inactive service type: %', p_service_type;
    END IF;

    INSERT INTO queue_daily_counters (business_date, service_type, last_number)
    VALUES (v_date, p_service_type, 1)
    ON CONFLICT (business_date, service_type)
    DO UPDATE SET last_number = queue_daily_counters.last_number + 1
    RETURNING last_number INTO v_next;

    v_formatted := v_prefix || LPAD(v_next::TEXT, 4, '0');
    RETURN v_formatted;
END;
$$;

-- =============================================================================
-- VIEWS
-- =============================================================================

CREATE OR REPLACE VIEW v_waiting_queue AS
SELECT
    q.queue_id,
    q.queue_number,
    q.service_type,
    st.display_name AS service_display_name,
    q.student_id,
    q.customer_name,
    q.request_details,
    q.created_at,
    EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - q.created_at))::INTEGER AS wait_seconds
FROM queue_transactions q
JOIN service_types st ON st.service_type_code = q.service_type
WHERE q.status = 'WAITING'
ORDER BY q.service_type, q.created_at;

CREATE OR REPLACE VIEW v_display_board AS
SELECT
    w.window_id,
    w.window_number,
    w.window_name,
    w.service_type,
    st.display_name AS service_display_name,
    w.status AS window_status,
    ds.current_queue_number,
    ds.last_called_queue_number,
    ds.updated_at AS display_updated_at,
    q.customer_name AS current_customer_name,
    q.status AS current_queue_status
FROM windows w
JOIN service_types st ON st.service_type_code = w.service_type
LEFT JOIN window_display_state ds ON ds.window_id = w.window_id
LEFT JOIN queue_transactions q ON q.queue_id = ds.current_queue_id
WHERE w.status = 'OPEN'
ORDER BY w.service_type, w.window_number;

CREATE OR REPLACE VIEW v_window_current_queue AS
SELECT
    w.window_id,
    w.window_number,
    w.window_name,
    w.service_type,
    q.queue_id,
    q.queue_number,
    q.student_id,
    q.customer_name,
    q.request_details,
    q.status,
    q.called_count,
    q.called_at,
    q.serving_at,
    q.created_at
FROM windows w
LEFT JOIN window_display_state ds ON ds.window_id = w.window_id
LEFT JOIN queue_transactions q ON q.queue_id = ds.current_queue_id;
