DROP DATABASE IF EXISTS posts;
CREATE DATABASE posts;
\c posts

DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    id SERIAL,
    genre VARCHAR(20),
    author VARCHAR(20),
    password VARCHAR(20),
    title VARCHAR(64),
    story TEXT
);

\i seed.sql

-- todo: id, genre, author, postPass, title, story