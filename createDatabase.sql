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
       title VARCHAR(50) NOT NULL,
       description VARCHAR(500) NOT NULL,
       rating DOUBLE NOT NULL,
       image LONGBLOB NOT NULL,
       user_id INT NOT NULL,
       FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE saved_organizations (
     id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
     user_id INT NOT NULL,
     organization_id INT NOT NULL,
     FOREIGN KEY (user_id) REFERENCES users(id),
     FOREIGN KEY (organization_id) REFERENCES organizations(id)
);