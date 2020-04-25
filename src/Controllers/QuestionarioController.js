const Questionario = require('../Models/questionario')

module.exports = {
  async create(req, res) {
    const { questionario } = req.body;
    const response = await Questionario.create(questionario)
    res.json({mensage: "Questionario enviado com sucesso"})
  }
}