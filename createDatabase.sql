DROP DATABASE IF EXISTS athenahacks;

CREATE DATABASE athenahacks;

USE athenahacks;

CREATE TABLE users (
       id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
       username VARCHAR(200) NOT NULL UNIQUE,
       status VARCHAR(200) NOT NULL,
       password VARCHAR(200) NOT NULL,
       email VARCHAR(200) NOT NULL
);

CREATE TABLE preferences (
     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     cause VARCHAR(200) NOT NULL,
     size INT NOT NULL,
     user_id INT NOT NULL,
     FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE organizations (
       id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
       name VARCHAR(50) NOT NULL,
       url VARCHAR(500) NOT NULL,
       image VARCHAR(500) NOT NULL,
       slug VARCHAR(50) NOT NULL,
       user_id INT NOT NULL,
       FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE history (
     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     name VARCHAR(50) NOT NULL,
     date DATE,
     amount INT NOT NULL,
     user_id INT NOT NULL,
     FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users(username, status, password, email) VALUES ('tommy', '','Trojan','tommy@usc.edu');
INSERT INTO preferences(cause, size, user_id) VALUES ('animals', 0, 1);
INSERT INTO preferences(cause, size, user_id) VALUES ('water', 0, 1);
INSERT INTO preferences(cause, size, user_id) VALUES ('food', 0, 1);
INSERT INTO preferences(cause, size, user_id) VALUES ('work', 0, 1);

