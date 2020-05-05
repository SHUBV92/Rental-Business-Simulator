CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    body VARCHAR(5000),
    username VARCHAR(60),
    BOOKINS OBJECT,
    created_at TIMESTAMP
);