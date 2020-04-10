const Questionario = require('../Models/questionario')

module.exports = {
  async create(req, res) {
    const { questionario } = req.body;
    console.log(questionario)
    const response = await Questionario.create(questionario)
    console.log(response)
    res.json({mensage: "Questionario enviado com sucesso"})
  }
}