create table user_foods (
	food_id serial primary key,
	-- user_id int [ref: users.id],
	dish_name varchar(72),
	dish_description varchar,
	order_eaten int
);

insert into user_foods (dish_name, dish_description, order_eaten)
values ('Sweeto Burrito', 'buff chick with sweet hot sauce + tots + a diet dr pepper no ice', 2),
('Mooyah', 'mushroom swiss burger + sweet potato fries', 5),
('Smash Burger', 'truffle mushroom swiss + smash tots', 6),
('Panda Express', 'plate with chow mein + orange chicken + beijing beef', 1),
('J-Dawgs', 'beef hot dog with just special sauce', 3),
('In-n-Out', 'hamburger spread only + fries', 4);