# db_food


CREATE TABLE users(
    user_id INT PRIMARY key AUTO_INCREMENT,
    full_name VARCHAR(100),
    email VARCHAR(255),
    pass_word VARCHAR(255)
);

INSERT INTO users (full_name, email, pass_word) VALUES
('Emily Johnson', 'emily.j@example.com', 'pass789'),
('Michael Brown', 'michael.b@example.com', 'passwordXYZ'),
('Sophia Williams', 'sophia.w@example.com', 'secure123'),
('Daniel Miller', 'daniel.m@example.com', 'pass432'),
('Olivia Davis', 'olivia.d@example.com', 'mypassword'),
('Matthew Taylor', 'matthew.t@example.com', 'letmein123'),
('Emma Wilson', 'emma.w@example.com', 'password789'),
('Andrew Anderson', 'andrew.a@example.com', 'ilovecoding'),
('Ava Martinez', 'ava.m@example.com', '1234abcd'),
('William Jackson', 'william.j@example.com', 'password567'),
('Isabella Garcia', 'isabella.g@example.com', 'qwerty123'),
('James Harris', 'james.h@example.com', 'iloveSQL'),
('Lily Moore', 'lily.m@example.com', 'pass987'),
('Ethan White', 'ethan.w@example.com', 'abcde123'),
('Madison Lee', 'madison.l@example.com', 'pass654'),
('Aiden Smith', 'aiden.s@example.com', 'mypassword123'),
('Chloe Brown', 'chloe.b@example.com', 'chloepass'),
('Jackson Clark', 'jackson.c@example.com', 'password999'),
('Avery Turner', 'avery.t@example.com', 'turnerpass'),
('Scarlett Adams', 'scarlett.a@example.com', '12345pass');

SELECT * FROM users ;

CREATE TABLE restaurant (
	res_id INT PRIMARY KEY auto_increment,
	res_name VARCHAR(100),
	image VARCHAR(255),
	descs VARCHAR(255) 
);

INSERT INTO restaurant (res_name, image, descs) VALUES
('Cafe Bella', 'cafe_bella.jpg', 'A cozy cafe with a variety of coffee options.'),
('Pizza Palace', 'pizza_palace.jpg', 'Home of the best pizza in town!'),
('Sushi Haven', 'sushi_haven.jpg', 'Fresh and delicious sushi dishes.'),
('Burger Bistro', 'burger_bistro.jpg', 'Gourmet burgers and fries.'),
('Thai Spice', 'thai_spice.jpg', 'Authentic Thai cuisine with a touch of spice.'),
('Mediterranean Delight', 'mediterranean_delight.jpg', 'Experience the flavors of the Mediterranean.'),
('Taco Fiesta', 'taco_fiesta.jpg', 'Taste the excitement of Mexican street food.'),
('Vegetarian Oasis', 'vegetarian_oasis.jpg', 'A haven for vegetarian and vegan delights.'),
('Steakhouse Supreme', 'steakhouse_supreme.jpg', 'Premium steaks cooked to perfection.'),
('Seafood Harbor', 'seafood_harbor.jpg', 'Fresh seafood served with a view.'),
('Pasta Paradise', 'pasta_paradise.jpg', 'Indulge in a variety of pasta dishes.'),
('Deli Delight', 'deli_delight.jpg', 'Classic deli sandwiches and salads.'),
('Indian Spice', 'indian_spice.jpg', 'Savor the rich flavors of Indian cuisine.'),
('Smoothie Spot', 'smoothie_spot.jpg', 'Refreshing smoothies and healthy snacks.'),
('BBQ Barn', 'bbq_barn.jpg', 'BBQ favorites in a rustic setting.'),
('Noodle Nook', 'noodle_nook.jpg', 'A diverse selection of noodle dishes.'),
('Crepe Corner', 'crepe_corner.jpg', 'Sweet and savory crepes for every taste.'),
('Ice Cream Emporium', 'ice_cream_emporium.jpg', 'A paradise of ice cream flavors.'),
('Diner Daze', 'diner_daze.jpg', 'Classic American diner with comfort food.'),
('Pho Palace', 'pho_palace.jpg', 'Delicious Vietnamese pho and more.');

SELECT * FROM restaurant;

CREATE TABLE like_res (
	user_id INT,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	res_id INT,
	FOREIGN KEY(res_id) REFERENCES restaurant(res_id),
	date_like DATE,
	like_id INT PRIMARY KEY auto_increment
);

INSERT INTO like_res (user_id, res_id, date_like) VALUES
(1, 3, '2023-01-15'),
(2, 1, '2023-02-20'),
(3, 5, '2023-03-10'),
(4, 8, '2023-04-05'),
(5, 12, '2023-05-12'),
(1, 15, '2023-06-18'),
(2, 18, '2023-07-22'),
(3, 20, '2023-08-30'),
(4, 7, '2023-09-02'),
(5, 10, '2023-10-08'),
(1, 2, '2023-11-15'),
(2, 4, '2023-12-20'),
(3, 6, '2024-01-25'),
(4, 9, '2024-02-28'),
(5, 11, '2024-03-05'),
(1, 13, '2024-04-10'),
(2, 16, '2024-05-15'),
(3, 19, '2024-06-20'),
(4, 14, '2024-07-25'),
(5, 17, '2024-08-30');

SELECT * FROM like_res;

CREATE TABLE rate_res (
	user_id INT,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	res_id INT,
	FOREIGN KEY (res_id) REFERENCES restaurant(res_id),
	amount INTEGER,
	date_rate DATE,
	rate_id INT PRIMARY KEY auto_increment
);

CREATE TABLE food_type (
	type_id INT PRIMARY KEY auto_increment,
	type_name VARCHAR(255)
);

INSERT INTO food_type (type_name) VALUES
('Italian'),
('American'),
('Japanese'),
('Seafood'),
('Salad'),
('Mexican'),
('Steakhouse'),
('Chicken'),
('Sandwiches'),
('Fast Food'),
('Dessert'),
('Vietnamese'),
('Mediterranean'),
('Sushi'),
('Thai');

SELECT * FROM food_type;

CREATE TABLE food (
	food_id INT PRIMARY KEY auto_increment,
	food_name VARCHAR(255),
	image VARCHAR(255),
	price FLOAT,
	descs VARCHAR(255),
	type_id INT,
	FOREIGN KEY (type_id) REFERENCES food_type(type_id)
);

INSERT INTO food (food_name, image, price, descs, type_id) VALUES
('Pizza', 'pizza.jpg', 9.99, 'Delicious cheese pizza', 1),
('Burger', 'burger.jpg', 6.49, 'Juicy beef burger', 2),
('Pasta', 'pasta.jpg', 8.99, 'Classic spaghetti with marinara sauce', 3),
('Sushi', 'sushi.jpg', 12.99, 'Assorted sushi rolls', 4),
('Salad', 'salad.jpg', 5.99, 'Fresh garden salad with vinaigrette', 5),
('Taco', 'taco.jpg', 7.99, 'Spicy chicken taco', 6),
('Steak', 'steak.jpg', 15.99, 'Grilled ribeye steak', 7),
('Soup', 'soup.jpg', 4.99, 'Homemade chicken noodle soup', 8),
('Sandwich', 'sandwich.jpg', 6.99, 'Turkey and cheese sandwich', 9),
('Fried Chicken', 'fried_chicken.jpg', 10.99, 'Crispy fried chicken', 10),
('Ice Cream', 'ice_cream.jpg', 3.99, 'Vanilla ice cream scoop', 11),
('Ramen', 'ramen.jpg', 9.49, 'Japanese pork ramen', 12),
('Tacos', 'tacos.jpg', 8.49, 'Assorted beef and chicken tacos', 6),
('Fish and Chips', 'fish_chips.jpg', 11.99, 'Classic fish and chips', 13),
('Cupcake', 'cupcake.jpg', 2.49, 'Chocolate cupcake with frosting', 14),
('Fruit Salad', 'fruit_salad.jpg', 4.49, 'Mixed fruit salad', 5),
('Grilled Cheese', 'grilled_cheese.jpg', 5.49, 'Toasted cheese sandwich', 9),
('Smoothie', 'smoothie.jpg', 4.99, 'Refreshing fruit smoothie', 15),
('Pad Thai', 'pad_thai.jpg', 10.99, 'Thai-style stir-fried noodles', 3);

SELECT * FROM food;

CREATE TABLE sub_food (
	sub_id INT PRIMARY KEY auto_increment,
	sub_name VARCHAR (255),
	sub_price FLOAT,
	food_id INT,
	FOREIGN KEY (food_id) REFERENCES food(food_id)
);

INSERT INTO sub_food (sub_name, sub_price, food_id) VALUES
('Extra Cheese', 1.5, 1),
('Bacon', 2.0, 1),
('Mushrooms', 1.0, 1),
('Onions', 0.75, 1),
('Fries', 2.5, 2),
('Cheese Fries', 3.0, 2),
('Soft Drink', 1.75, 2),
('Extra Patty', 3.0, 2),
('Meatballs', 1.25, 3),
('Garlic Bread', 1.5, 3),
('Grilled Chicken', 2.0, 3),
('Shrimp', 3.0, 4),
('Sashimi', 4.5, 4),
('Edamame', 2.25, 4),
('Avocado', 1.75, 4),
('Croutons', 0.5, 5),
('Grilled Chicken', 2.0, 5),
('Caesar Dressing', 1.25, 5),
('Guacamole', 1.75, 6),
('Chips & Salsa', 2.0, 6),
('Quesadilla', 3.5, 6);


CREATE TABLE orders (
	user_id INT,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	food_id INT,
	FOREIGN KEY (food_id) REFERENCES food(food_id),
	amount INT,
	code VARCHAR(255),
	arr_sub_id VARCHAR (255),
	order_id INT PRIMARY KEY auto_increment
);

INSERT INTO orders (user_id, food_id, amount, code, arr_sub_id) VALUES
(1, 1, 2, 'ORDER123', '1,3,5'),
(2, 2, 1, 'ORDER456', '2,4'),
(3, 3, 3, 'ORDER789', '6,8,9'),
(4, 4, 2, 'ORDERABC', '10,11'),
(5, 5, 1, 'ORDERDEF', '12'),
(6, 6, 4, 'ORDERGHI', '13,14,15,16'),
(7, 7, 2, 'ORDERJKL', '17,18'),
(8, 8, 3, 'ORDERMNO', '19,20'),
(9, 9, 1, 'ORDERPQR', '21'),
(10, 10, 2, 'ORDERSUV', '22,23'),
(11, 11, 5, 'ORDERTWX', '24,25,26'),
(12, 12, 1, 'ORDERYZA', '27'),
(13, 13, 2, 'ORDERBCD', '28,29'),
(14, 14, 1, 'ORDEREFG', '30'),
(15, 15, 4, 'ORDERHIJ', '31,32,33,34'),
(19, 19, 2, 'ORDERTUV', '22,23');

SELECT * FROM orders;


