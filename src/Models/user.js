const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  usuario: "",
  senha: "",
  email: "",
  nomeCompleto: ""
})

module.exports = mongoose.model('User', UserSchema) 