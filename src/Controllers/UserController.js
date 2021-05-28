const User = require('../Models/user')
const bcrypt = require('bcrypt')

module.exports = {
  async create(req, res) {
    var { user } = req.body;
    var response = await User.find({ usuario: user.usuario }, (err) => {
      if(err){
        return res.status(500).json(err)
      }
    })

    if (response.length > 0) {
      return res.status(404).json({ message: "Usuario já cadastrado" })
    }

    bcrypt.genSalt(10, function (err, salt) {
      if(err){
        return res.status(500).json(err)
      }
      bcrypt.hash(user.senha, salt, async function (err, hash) {

        if (err) {
          return res.status(500).json({ menssage: "Erro ao criar usuario tente novamente" })
        }

        user.senha = hash;
        response = await User.create(user, (err) => {
          if(err){
            return res.status(500).json(err)
          }
        })
      })
    })
    return res.status(201).json({ mensage: "Usuario criado com sucesso" })
  },

  async listAll(req, res) {
    const response = await User.find();

    
    
    return res.status(200).json(response);
  },

  async delete(req, res) {
    const { usuario } = req.params;
    const response = await User.findOne({ usuario: usuario })

    if (response === null) {
      return res.status(404).json({ message: "usuario nao encontrado." })
    }
    
    await User.deleteOne({ usuario: usuario }, (err) => {
      if (err) {
        return res.status(500).json(err)
      }
    })
    return res.status(200).json({ message: "Usuario apagado com sucesso"})
  }
}