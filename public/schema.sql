DROP DATABASE IF EXISTS diets_db;

CREATE database diets_db;

USE diets_db;
-- Use models and assopciate to do the same below; create relationship and queries

CREATE TABLE items (
    product VARCHAR(255),
    calories INT,
    categories VARCHAR (255),
    price VARCHAR(10),
    productId INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);



CREATE TABLE diet_categories (
    diet VARCHAR(255),
    info VARCHAR (255),
    productId INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

INSERT INTO diet_categories (diet, info)
VALUES ('meats','You are a Carnivor');
INSERT INTO diet_categories (diet, info)
VALUES ('fish','You are a Pescetarian');
INSERT INTO diet_categories (diet, info)
VALUES ('veggies','You are a Vegitarian');
INSERT INTO diet_categories (diet, info)
VALUES ('diary','You are a Cow');


CREATE TABLE questions (
    question VARCHAR(255),
    qId INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE user (
    usrId VARCHAR(255),
    inputKey BOOLEAN,
    usr_input INT NOT NULL
);

