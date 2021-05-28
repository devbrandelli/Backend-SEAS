const express = require ('express')
const QuestionarioController = require ('./Controllers/QuestionarioController')
const UserController = require ('./Controllers/UserController')
const LoginController = require ('./Controllers/LoginController')

const routes = express.Router();

//ROTAS QUESTIONARIO
routes.post('/questionario',QuestionarioController.create);
routes.get('/questionario', QuestionarioController.getAll);
routes.delete('/questionario/:id', QuestionarioController.deleteOne);

//ROTAS USUARIOS
routes.get('/user', UserController.listAll)
routes.post('/user', UserController.create);
routes.delete('/user/:usuario', UserController.delete);

//ROTA DE LOGIN
routes.post('/login', LoginController.Auth)

module.exports = routes;