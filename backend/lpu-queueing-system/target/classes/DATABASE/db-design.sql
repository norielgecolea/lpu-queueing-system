-- ==========================================
-- QUEUE MANAGEMENT SYSTEM DATABASE
-- PostgreSQL Version
-- ==========================================

-- ==========================================
-- USERS
-- ==========================================

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'TELLER'
        CHECK (role IN ('ADMIN', 'TELLER')),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- WINDOWS
-- ==========================================

CREATE TABLE windows (
    window_id SERIAL PRIMARY KEY,
    window_name VARCHAR(50) NOT NULL,
    service_type VARCHAR(20) NOT NULL
        CHECK (service_type IN ('CASHIER', 'REGISTRAR')),
    status VARCHAR(20) DEFAULT 'OPEN'
        CHECK (status IN ('OPEN', 'CLOSED'))
);

-- ==========================================
-- USER WINDOW ASSIGNMENTS
-- ==========================================

CREATE TABLE user_window_assignments (
    assignment_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    window_id INTEGER NOT NULL,
    assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_assignment_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_assignment_window
        FOREIGN KEY (window_id)
        REFERENCES windows(window_id)
        ON DELETE CASCADE
);

-- ==========================================
-- STUDENTS
-- ==========================================

CREATE TABLE students (
    student_id VARCHAR(20) PRIMARY KEY,
    rfid_uid VARCHAR(100) UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    course VARCHAR(100),
    year_level VARCHAR(20),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- QUEUE TRANSACTIONS
-- ==========================================

CREATE TABLE queue_transactions (
    queue_id BIGSERIAL PRIMARY KEY,

    queue_number VARCHAR(20) NOT NULL UNIQUE,

    service_type VARCHAR(20) NOT NULL
        CHECK (service_type IN ('CASHIER', 'REGISTRAR')),

    student_id VARCHAR(20),

    customer_name VARCHAR(150) NOT NULL,

    request_details TEXT,

    status VARCHAR(20) DEFAULT 'WAITING'
        CHECK (
            status IN (
                'WAITING',
                'CALLED',
                'SERVING',
                'COMPLETED',
                'TRANSFERRED',
                'CANCELLED'
            )
        ),

    window_id INTEGER,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    called_at TIMESTAMP,

    serving_at TIMESTAMP,

    completed_at TIMESTAMP,

    CONSTRAINT fk_queue_student
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE SET NULL,

    CONSTRAINT fk_queue_window
        FOREIGN KEY (window_id)
        REFERENCES windows(window_id)
        ON DELETE SET NULL
);

-- ==========================================
-- QUEUE TRANSFERS
-- ==========================================

CREATE TABLE queue_transfers (
    transfer_id BIGSERIAL PRIMARY KEY,

    queue_id BIGINT NOT NULL,

    from_window_id INTEGER NOT NULL,

    to_window_id INTEGER NOT NULL,

    transferred_by INTEGER NOT NULL,

    remarks TEXT,

    transferred_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_transfer_queue
        FOREIGN KEY (queue_id)
        REFERENCES queue_transactions(queue_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_transfer_from_window
        FOREIGN KEY (from_window_id)
        REFERENCES windows(window_id),

    CONSTRAINT fk_transfer_to_window
        FOREIGN KEY (to_window_id)
        REFERENCES windows(window_id),

    CONSTRAINT fk_transfer_user
        FOREIGN KEY (transferred_by)
        REFERENCES users(user_id)
);

-- ==========================================
-- QUEUE LOGS
-- ==========================================

CREATE TABLE queue_logs (
    log_id BIGSERIAL PRIMARY KEY,

    queue_id BIGINT NOT NULL,

    action_type VARCHAR(20) NOT NULL
        CHECK (
            action_type IN (
                'GENERATED',
                'CALLED',
                'RECALLED',
                'COMPLETED',
                'TRANSFERRED',
                'CANCELLED'
            )
        ),

    user_id INTEGER,

    remarks TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_log_queue
        FOREIGN KEY (queue_id)
        REFERENCES queue_transactions(queue_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_log_user
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
        ON DELETE SET NULL
);

-- ==========================================
-- VOICE NOTIFICATION HISTORY
-- ==========================================

CREATE TABLE voice_notifications (
    notification_id BIGSERIAL PRIMARY KEY,

    queue_id BIGINT NOT NULL,

    window_id INTEGER NOT NULL,

    played_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_notification_queue
        FOREIGN KEY (queue_id)
        REFERENCES queue_transactions(queue_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_notification_window
        FOREIGN KEY (window_id)
        REFERENCES windows(window_id)
);

-- ==========================================
-- MEDIA PLAYLIST
-- ==========================================

CREATE TABLE media_playlist (
    media_id SERIAL PRIMARY KEY,

    file_name VARCHAR(255) NOT NULL,

    file_path TEXT NOT NULL,

    media_type VARCHAR(20) DEFAULT 'VIDEO'
        CHECK (media_type IN ('VIDEO', 'IMAGE')),

    duration_seconds INTEGER,

    is_active BOOLEAN DEFAULT TRUE,

    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- ANNOUNCEMENTS
-- ==========================================

CREATE TABLE announcements (
    announcement_id SERIAL PRIMARY KEY,

    title VARCHAR(100) NOT NULL,

    content TEXT NOT NULL,

    is_active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- DEFAULT WINDOWS
-- ==========================================

INSERT INTO windows (window_name, service_type)
VALUES
('Cashier Window 1', 'CASHIER'),
('Cashier Window 2', 'CASHIER'),
('Registrar Window 1', 'REGISTRAR'),
('Registrar Window 2', 'REGISTRAR');

-- ==========================================
-- PERFORMANCE INDEXES
-- ==========================================

CREATE INDEX idx_queue_status
ON queue_transactions(status);

CREATE INDEX idx_queue_service_type
ON queue_transactions(service_type);

CREATE INDEX idx_queue_created_at
ON queue_transactions(created_at);

CREATE INDEX idx_queue_window
ON queue_transactions(window_id);

CREATE INDEX idx_logs_queue
ON queue_logs(queue_id);

CREATE INDEX idx_transfer_queue
ON queue_transfers(queue_id);

CREATE INDEX idx_student_rfid
ON students(rfid_uid);

-- ==========================================
-- OPTIONAL: QUEUE NUMBER SEQUENCES
-- ==========================================

CREATE SEQUENCE cashier_queue_seq START 1;
CREATE SEQUENCE registrar_queue_seq START 1;

-- Example:
-- SELECT 'C' || LPAD(nextval('cashier_queue_seq')::text, 4, '0');
-- Result: C0001
--
-- SELECT 'R' || LPAD(nextval('registrar_queue_seq')::text, 4, '0');
-- Result: R0001