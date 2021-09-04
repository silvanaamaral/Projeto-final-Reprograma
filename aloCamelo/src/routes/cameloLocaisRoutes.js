const express = require('express')
const router = express.Router()
const controller = require('../controllers/cameloLocaisControllers')


router.get('/', controller.getAllLocais)
router.get('/:_id', controller.getFindById)
router.get('/nome', controller.getFindByNome)
router.get("/oi", (req, resp)=>{
    resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
})


module.exports = router