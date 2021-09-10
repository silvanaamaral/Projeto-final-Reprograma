const express = require('express')
const router = express.Router()
const controller = require('../controllers/locaisControllers')


router.get('/todos', controller.getAllLocais)
router.get('/todos:_id', controller.getFindById)
router.get('/nome', controller.getFindByNome)
router.post('/create', controller.createLocal)
router.put("/atualiza/:id", controller.updateLocal)
router.delete("/deleta/:id",controller.deletaLocal)



module.exports = router