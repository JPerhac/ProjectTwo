DROP DATABASE IF EXISTS diets_db;

CREATE database diets_db;

USE diets_db;
-- Use models and assopciate to do the same below; create relationship and queries

CREATE TABLE items (
    product VARCHAR(255),
    calories INT,
    categories VARCHAR (255),
    price DECIMAL(4,2),
    productId INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE diet_categories (
    diet VARCHAR(255),
    info VARCHAR (255),
    productId INT NOT NULL PRIMARY KEY
);

CREATE TABLE questions (
    question VARCHAR(255),
    qID INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE user (
    usrID VARCHAR(255),
    inputKey BOOLEAN,
    usr_input INT NOT NULL
)