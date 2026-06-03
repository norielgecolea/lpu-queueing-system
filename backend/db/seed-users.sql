-- Default staff accounts (development)
-- Password for both accounts: password
-- BCrypt hash generated with strength 10

INSERT INTO users (username, password_hash, full_name, role)
VALUES
    (
        'admin',
        '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'System Administrator',
        'ADMIN'
    ),
    (
        'teller1',
        '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
        'Cashier Teller',
        'TELLER'
    )
ON CONFLICT (username) DO NOTHING;
