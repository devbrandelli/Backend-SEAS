const express = require ('express')
const QuestionarioController = require ('./Controllers/QuestionarioController')
const UserController = require ('./Controllers/UserController')
const LoginController = require ('./Controllers/LoginController')

const routes = express.Router();

//ROTAS QUESTIONARIO
routes.post('/questionario/create',QuestionarioController.create);

//ROTAS USUARIOS
routes.post('/user/create', UserController.Create);
routes.delete('/user/delete/:usuario', UserController.Delete);

//ROTA DE LOGIN
routes.post('/login', LoginController.Auth)

module.exports = routes;