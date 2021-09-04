
const Locais = require('../models/cameloLocaisModels.js')
const Usuarios = require('../models/usuarios.js')


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
    const obterLocalPorNome = async(req, res) => {
        const { nome } = req.query;
        Local.find({ nome: nome })
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


