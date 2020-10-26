const { deleteOne } = require('../Models/questionario');
const Questionario = require('../Models/questionario')

module.exports = {
  async create(req, res) {
    const { questionario } = req.body;
    const response = await Questionario.create(questionario, (err)=> {
      if (err) {
        res.status(500).json({message: "Erro ao inserir questionario no banco"})
      } 
    })
    res.json({mensage: "Questionario enviado com sucesso"})
  },
  async getAll(req, res) {
    const response = await Questionario.find();
    res.json({response})
  },

  async deleteOne(req, res) {
    const { id } = req.params;
    Questionario.deleteOne({ _id: id}, err => {
      if (err) {
        res.status(500).json(err)
      }
      res.status(200).json({message: "questionario deletado"})
    })
    
  }

}