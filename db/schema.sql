DROP DATABASE IF EXISTS burger_app_db;

CREATE DATABASE burger_app_db;

USE burger_app_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devour BOOLEAN default false,
    favorite BOOLEAN default false,
    PRIMARY KEY (id)
);