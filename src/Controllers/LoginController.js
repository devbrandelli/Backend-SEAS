const User = require('../Models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonWebToken')
require('dotenv/config')

module.exports = {

  async Auth(req, res) {
    const { usuario, senha } = req.body;

    const response = await User.findOne({ usuario: usuario })    

    if (response === null) {
      return res.status(401).json({ error: "Usuario não autorizado" })
    }

    bcrypt.compare(senha, response.senha, (err, same) => {
      if (err) {
        return res.status(401).json({ error: "Usuario não autorizado" })
      }
      if (same) {
        const token = jwt.sign(
          {
            name: response.nomeCompleto,
            email: response.email
          }, process.env.JWT_KEY,
          {
            expiresIn: "1h"
          }
        )
        return res.status(200).json({ message: "autenticado com sucesso" , token})
      }
      return res.status(401).json({ error: "Usuario não autorizado" })

    })
  }
}