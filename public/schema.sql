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

INSERT INTO items (product, calories, categories, price)
VALUES ('Beef Steak', '300', 'meats','25.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Pork Ribs', '500', 'meats','13.47');
INSERT INTO items (product, calories, categories, price)
VALUES ('Lamb Chops', '250', 'meats','8.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Chicken', '200', 'meats','10.47');
INSERT INTO items (product, calories, categories, price)
VALUES ('Turkey', '100', 'meats','8.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Catfish', '300', 'fish','14.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Halibut', '350', 'fish','219.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Salmon', '400', 'fish','11.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Red Snapper', '250', 'fish','12.49');
INSERT INTO items (product, calories, categories, price)
VALUES ('Tilapia', '200', 'fish','12.39');
INSERT INTO items (product, calories, categories, price)
VALUES ('Asaragus', '20', 'veggies','4.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Avocado', '400', 'veggies','5.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Bell Pepper', '30', 'veggies','5.00');
INSERT INTO items (product, calories, categories, price)
VALUES ('Broccoli', '20', 'veggies','2.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Spinach', '10', 'veggies','4.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Milk', '350', 'diary','6.99');
INSERT INTO items (product, calories, categories, price)
VALUES ('Eggs', '250', 'diary','5.49');
INSERT INTO items (product, calories, categories, price)
VALUES ('Cheese', '400', 'diary','5.49');
INSERT INTO items (product, calories, categories, price)
VALUES ('Butter', '400', 'diary','3.48');
INSERT INTO items (product, calories, categories, price)
VALUES ('Yogurt', '250', 'diary','5.99');

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
)
