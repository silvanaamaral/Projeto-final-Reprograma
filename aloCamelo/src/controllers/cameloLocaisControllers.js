const mongoose = require('Mongoose')
const Locais = require('../models/cameloLocaisModels.js')
const Usuarios = require('../models/usuarios.js')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SECRET = process.env.SECRET

//GET
const getAllLocais = (req, res) => {
    Locais.find((err, local) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        };
        return res.status(200).send(local);
    });
};  

const getFindById = async (req, res) =>{
}

const getFindByNome = async (req, res) =>{
} 

const getFindByCoordenadas = async (req, res) =>{
}


//POST 
const createLocal = async (req, res) => {
}    

//PUT 

const updateLocal = async (req, res) => {
} 

//DELETE

const deletaLocal = async (req, res) => {
}


module.exports = {

    getAllLocais,
    getFindById,
    getFindByNome,
    getFindByCoordenadas,
    createLocal,
    updateLocal,
    deletaLocal  
   
}


