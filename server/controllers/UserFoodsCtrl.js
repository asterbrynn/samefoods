module.exports = {
	getFoods(req, res) {
		const db = req.app.get("db");
		db.get_user_foods().then(response => {
			res.send(response)
		})
	},
	editFood(req, res) {
		const db = req.app.get("db");
		const {id} = req.query;
		const {dish_name, dish_description, order_eaten} = req.body;
		db.update_food({id, dish_name, dish_description, order_eaten}).then(response => {
			res.send(response)
		})
	},
	create(req, res) {
		const db = req.app.get("db");
		const {dish_name, dish_description, order_eaten} = req.body;
		db.add_new_food({dish_name, dish_description, order_eaten}).then(response => {
			res.status(200).send(response)
		})
	},
	delete(req, res) {
		const db = req.app.get("db");
		const {id} = req.params;
		db.delete_food([id]).then(() => {
			res.sendStatus(200)
		})
	}
}