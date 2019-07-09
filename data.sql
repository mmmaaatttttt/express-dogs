DROP DATABASE dogs_db IF EXISTS;
CREATE DATABASE dogs_db;

\c dogs_db

CREATE TABLE dogs (
  id SERIAL PRIMARY KEY,
  name TEXT,
  age INTEGER
);

INSERT INTO dogs (name, age) VALUES ('Whiskey', 5), ('Tubby', 6);