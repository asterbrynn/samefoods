update user_foods
set dish_name = ${dish_name}, dish_description = ${dish_description}, order_eaten = ${order_eaten}
where food_id = ${id};

select * from user_foods;