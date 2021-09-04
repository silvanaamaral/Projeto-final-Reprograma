const mongoose = require('mongoose')

const usuariosSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('usuarios', usuariosSchema)
