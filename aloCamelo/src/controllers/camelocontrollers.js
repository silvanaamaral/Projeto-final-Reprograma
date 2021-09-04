const mongoose = require('Mongoose')
const Camelo = require('../models/cameloModels.js')


const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SECRET = process.env.SECRET


const getAllCamelo = (req, res) => {
    Camelo.find((err, camelo) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        };
        return res.status(200).send(camelo);
    });
};
/*  const getAll = async (req, res) => {
    const camelo = await Camelo.find().populate('camelo')
    res.status(200).json(camelo) 
  } */
const createCamelo = async (req, res) => {
    const authHeader = req.get('authorization');
    const token = authHeader.split(' ')[1]

    if (!token) {
        return res.status(403).send({ message: "onde esta o token" })
    }

    jwt.verify(token, SECRET, async (err) => {
        if (err) {
            res.status(403).send({ message: 'Token não válido', err })
        }
        const camelo = new Camelo({
            _id: mongoose.Schema.Types.ObjectId(),
            nome: req.body.nome,
            endereco: req.body.endereco,
            cep: req.body.cep,
            cidade: req.body.cidade,
            estado: req.body.estado,
            sexo: req.body.sexo,
            email:req.body.email,
            telefono: req.body.telefono,
            senha: req.body.senha,
            criadoEm: req.body.criadoEm,
            
        })
        try {
            const novoCamelo = await camelo.save()
            res.status(201).json(novoCamelo)
        } catch (err) {
            res.status(400).json({mensage: err.mensage})

        }
        })
}


module.exports = {

 getAllCamelo,
 
 createCamelo,


}

