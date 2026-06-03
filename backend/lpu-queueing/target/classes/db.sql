CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name VARCHAR(100),
    role VARCHAR(20) DEFAULT 'TELLER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE service_types (
    id BIGSERIAL PRIMARY KEY,
    service_code VARCHAR(10) UNIQUE NOT NULL,
    service_name VARCHAR(50) NOT NULL
);

CREATE TABLE windows (
    id BIGSERIAL PRIMARY KEY,
    window_number VARCHAR(20) UNIQUE NOT NULL,
    service_type_id BIGINT REFERENCES service_types(id),
    status VARCHAR(20) DEFAULT 'ACTIVE'
);

CREATE TABLE queue_tickets (
    id BIGSERIAL PRIMARY KEY,

    queue_number VARCHAR(20) UNIQUE NOT NULL,

    student_id VARCHAR(50),
    customer_name VARCHAR(150),

    service_type_id BIGINT REFERENCES service_types(id),

    request_details TEXT,

    rfid_tag VARCHAR(100),

    status VARCHAR(20) DEFAULT 'WAITING',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    called_at TIMESTAMP,

    completed_at TIMESTAMP
);

CREATE TABLE queue_transactions (
    id BIGSERIAL PRIMARY KEY,

    queue_ticket_id BIGINT REFERENCES queue_tickets(id),

    window_id BIGINT REFERENCES windows(id),

    teller_id BIGINT REFERENCES users(id),

    action_type VARCHAR(30),

    remarks TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);