require("dotenv-safe").config();
const Administrador = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET;
const { auth } = require("./authorization");
const { connect } = require("../data/database");


connect()

const allAdmin = (req, res) => {
  auth(req, res);

  Administrador.find((err, administrators) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(administrators);
  });
};
const createAdmin = (req, res) => {
    const encryptedPassword = bcrypt.hashSync(req.body.password, 10);
        req.body.password = encryptedPassword;
  
        const newAdmin = new Administrador(req.body);
        newAdmin.save((err) => {
          if (err) {
            return res.status(424).send({ message: err.message });
          }
          res.status(201).send({
            message: "Admin registrado com sucesso!",
            administrador: newAdmin,
          });
        });
};
const loginAdmin = (req, res) => {
  Administrador.findOne({ email: req.body.email }, (err, adminEncontrada) => {
    if (!adminEncontrada) {
      
      return res.status(404).send({ message: "Admin não encontrada", email: `${req.body.email}` })
    }

    const senhaValida = bcrypt.compareSync(req.body.password, adminEncontrada.password)
    if (!senhaValida) {
      return res.status(401).send({ message: "Login não autorizado" })
    }
    
    const token = jwt.sign({ email: req.body.email }, SECRET)

    res.status(200).send({ message: "Login realizado com sucesso!", token: token })
  })
}
const updateAdmin = (req, res) => {
  const authHeader = req.get('Authorization')
  const token = authHeader.split(' ')[1]
  if(!token){
    return res.status(403).send({message: 'Insira o token!'})}

    jwt.verify(token, SECRET, async(err) => {
      if (err) {
          return res.status(403).send({message: 'Token não válido!', err})
      }try {
      const administrador = await Administrador.findById(req.params.id)
      if(administrador == null){
      return res.status(404).json({message: "Adm não localizado!"})
      }
      if (req.body.nome != null){
      administrador.nome = req.body.nome
      }
      const admAtualizado = await administrador.save()
      res.status(200).json(admAtualizado)
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    })
};
const removeAdminById = (req, res) => {
  const authHeader = req.get('Authorization')
  const token = authHeader.split(' ')[1]
  if(!token){
    return res.status(403).send({message: 'Insira o token!'})}

    jwt.verify(token, SECRET, async(err) => {
      if (err) {
          return res.status(403).send({message: 'Token não válido!', err})
      }
      const admId = req.params.id
      try
        {
          Administrador.deleteOne({ _id: requireId }, function(err){
              if(!err){
                  res.status(200).json({message: "Administrador apagado com sucesso!"})
              }else{
                  res.status(500).json({message: err.message})
              }
          })
      } catch{
          res.status(404).json({message: 'Não há dados para remover com o ID inserido'})
      }
  })
}



module.exports = { allAdmin, createAdmin, loginAdmin, updateAdmin, removeAdminById }
 