const CameloAdministrador = require('../models/cameloAdministrador')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const create = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
  req.body.senha = senhaComHash

  const cameloAdministrador = new CameloAdministrador(req.body)
  try {
    const novoCameloAdministrador = await cameloAdministrador.save()
    res.status(201).json(novoCameloAdministrador)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
const login = async (req, res) => {
  const cameloAdministradorEncontrado = new CameloAdministrador(req.body)

    CameloAdministrador.findOne({ email: cameloAdministradorEncontrado.email }, (err, cameloAdministradorEncontrado) => {
    if (!cameloAdministradorEncontrado) {
      return res.status(404).send({ message: 'administrador nao encontrado', email: '${req.body.email}' })
    }
    const senhaValida = bcrypt.compareSync(req.body.senha, cameloAdministradorEncontrado.senha)

    if (!senhaValida) {
      return res.status(401).send({ message: 'Login nao autorizado' })
    }
    
    const id = cameloAdministradorEncontrado.Id;
    const sec = process.env.SECRET;

    const token = jwt.sign({ id }, '${sec}', {
      expiresIn: 300 // expires in 5min
    });

     return res.status(200).send({ messagem: 'Login realizado com sucesso', token: token })
  })


}


module.exports = { create, login }
