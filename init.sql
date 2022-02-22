CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL 
);

INSERT INTO users (username, password, email, salt)
VALUES ('admin', '$2b$10$Yr2SlyMCwuhrwivZY0EPhO9/xWd7/OzPj1V2GzsI4mz5J.7wPua3e', 'admin@mail.com', '$2b$10$Yr2SlyMCwuhrwivZY0EPhO'), 
       ('Yura', '$2b$10$Yr2SlyMCwuhrwivZY0EPhO9/xWd7/OzPj1V2GzsI4mz5J.7wPua3e', 'yura@mail.com', '$2b$10$Yr2SlyMCwuhrwivZY0EPhO');

CREATE TABLE photos (
    photo_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    photo_name VARCHAR(255)
);

INSERT INTO photos (user_id, photo_name)
VALUES (1, '1'), (1, '2'), (2, '3'), (2, '4');

CREATE TABLE captions (
    photo_id INTEGER,
    caption VARCHAR(255),
    caption_autor VARCHAR(255)
);

INSERT INTO captions (photo_id, caption, caption_autor)
VALUES (1, 'SUPER', 'user1'), (1, 'Great!!!', 'user2'), (2, 'Cool', 'user3'), (3, 'Fine', 'user4');