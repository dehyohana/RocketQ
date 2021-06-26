const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()
//Pego o endereço '/' e renderizo a página com o ejs index
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)


route.post('/question/create/:room' , QuestionController.create)
//Formato que o formulario de dentro da modal tem que passar a info, ex: route.post('/room/323232/2/check')
route.post('/question/:room/:question/:action', QuestionController.index)


//Para poder exportar
module.exports = route
