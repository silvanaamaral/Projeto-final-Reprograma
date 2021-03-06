require("dotenv-safe").config();
const mongoose = require('mongoose')
const Locais = require('../models/locaisModels.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SECRET = process.env.SECRET
const { auth } = require("./authorization");
const { connect } = require("../data/database");


connect()


const getAllLocais = async (req, res) => {

    auth(req, res);

    Locais.find((err, local) => {
        if (err) {
            return res.status(500).send({ message: err.message });
        };
        return res.status(200).send(local);
    });
};  

const getFindById = async (req, res) =>{

    const getLocalById = await Locais.findById(req.params.id)

    Locais.findOne({_id:req.params.id},
        function(err){
          if(err){
            res.status(500).json({message: err.message})
          }else{
            res.status(200).json(getLocalById)
          }
    })


}

const getFindByNome = async (req, res) =>{

    const nome = req.query.nome;

    Locais.find({ nome: nome })
        .then(async local => {
            if (local == 0) {
                res.status(404).json({ message: 'Não há local cadastrado' });
            } else {
                res.status(200).json(local);
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });

}
 
const createLocal = async (req, res) => {

    const local = new Locais ({

        _id : new mongoose.Types.ObjectId(),
        nome : req.body.nome,
        usuario: req.body.usuario ,
        resumo: req.body.resumo,
        latitude: req.body.latitude,
        longitude: req.body.longitude,        

    })
    
    try{
      const novoLocal = await local.save()
      res.status(201).json(novoLocal)
    } catch(err) {
      res.status(400).json({ message: err.message})
    }  
}    



const updateLocal = async (req, res) => {

    try {

        const local = await Locais.findById(req.params.id)
   
     if (local == null) {
            return res.status(404).json({message: "local não encontrado"})
        }

        
        if (req.body.nome != null) {
            local.nome = req.body.nome
        }
        if (req.body.resumo != null) {
            local.resumo = req.body.resumo
        }
        if (req.body.latitude != null) {
            local.latitude = req.body.latitude
        }
        if (req.body.longitude != null) {
            local.longitude = req.body.longitude
        }

        
        const localAtualizado = await local.save()
      
        res.status(200).json(localAtualizado)

    } catch (err) {
        
        res.status(500).json({message: err.message})
      }

} 



const deletaLocal = async (req, res) => {
      
  const local = await Locais.findById(req.params.id)
  if (local == null) {
    return res.status(404).json({message: "Local não encontrado"})
  }
  local.deleteOne(
    {id: req.params.id},
    function (err){
      if(err){
        res.status(500).json({message: err.message})
      }else{
        res.status(200).json({message: "Local deletado com sucesso"})
      }
    })



}


module.exports = {

    getAllLocais,
    getFindById,
    getFindByNome,    
    createLocal,
    updateLocal,
    deletaLocal  
   
}


