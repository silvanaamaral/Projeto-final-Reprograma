const mongoose = require('mongoose')

const cameloSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  cep: {
   type: String,
   required: true
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true 
  },
  senha: {
    type: String,
    required: true
  },
  criadoEm: {
    type: String,
    required: true 
  },

})

module.exports = mongoose.model('camelo', cameloSchema)
