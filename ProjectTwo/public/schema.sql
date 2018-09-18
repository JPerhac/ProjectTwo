DROP DATABASE IF EXISTS diets_db;
USE diets_db;
-- Use models and assopciate to do the same below; create relationship and queries

CREATE TABLE items (
    product VARCHAR(255),
    calories INT,
    categories VARCHAR (255),
    price DECIMAL(4,2),
    group VARCHAR(255),
    product_id INT NOT NULL AUTO_INCREMENT
);

CREATE TABLE diet_categories (
    diet VARCHAR(255),
    group VARCHAR(255),
    info VARCHAR (255),
    product_id INT NOT NULL
);

CREATE TABLE questions (
    question VARCHAR(255),
    group VARCHAR(255),
    qID INT NOT NULL AUTO_INCREMENT
);

CREATE TABLE user (
    usrID VARCHAR(255),
    inputKey BOOLEAN,
    usr_input INT NOT NULL
)