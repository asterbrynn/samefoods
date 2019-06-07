require('dotenv').config();
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const userFoodsCtrl = require('./controllers/UserFoodsCtrl')
const massive = require('massive');
const express = require('express');
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(dbInstance => {
	app.set("db", dbInstance);
	app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching on Rome`));
})

app.get('/api/user-foods', userFoodsCtrl.getFoods);
app.put('/api/user-foods', userFoodsCtrl.editFood);
app.post('/api/user-foods', userFoodsCtrl.create);
app.delete(`/api/user-foods/:id`, userFoodsCtrl.delete);