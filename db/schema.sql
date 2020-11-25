-- DROP DATABASE IF EXISTS burgers_db;
-- -- Create a database called programming_db --
-- CREATE DATABASE burgers_db;
USE nvbbtlyx2op18eny;

CREATE TABLE burgers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN default false
);