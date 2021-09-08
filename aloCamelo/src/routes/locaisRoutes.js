const express = require('express')
const router = express.Router()
const controller = require('../controllers/locaisControllers')


router.get('/', controller.getAllLocais)
router.get('/:_id', controller.getFindById)
router.get('/nome', controller.getFindByNome)
router.post('/', controller.createLocal)
router.put("/:id", controller.updateLocal)
router.delete("/:id",controller.deletaLocal)


router.get("/oi", async (req, resp)=>{

    resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})

})

module.exports = router