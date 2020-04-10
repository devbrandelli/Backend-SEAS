const express = require ('express')
const QuestionarioController = require ('./Controllers/QuestionarioController')

const routes = express.Router();

routes.post('/questionario/create',QuestionarioController.create);

module.exports = routes;