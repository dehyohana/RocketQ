//Primeiro objetivo: Fazer o html aparecer no navegador chamando a rota

//Preciso instalar express
const express = require('express')
//Preciso indicar a rota
const route = require('./route')
//Preciso indicar a rota
const path = require('path')
//nomear servidor
const server = express()
//nomeio a view engine com o formato ejs
server.set('view engine', 'ejs')
server.use(express.static("public"))
//indico onde está a pasta views usando a função .join para abrir a pasta ...src/views
server.set('views', path.join(__dirname, 'views') )
//midleware para passar a rota
server.use(express.urlencoded({extended: true}))
//indico a rota
server.use(route)
//Servidor na porta localhost:3000, exibe mensagem no terminal
server.listen(3000, () => console.log("RODANDO"))

//Segundo objetivo: Fazer exibir o html criado anteriormente
//Terceiro objetivo: trabalhar com a modal
//Quarto objetivo: pegar informações do formulário para construção da URL
//Quinto objetivo: criar room com id no front
