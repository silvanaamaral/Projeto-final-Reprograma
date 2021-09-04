const express = require('express')
const router = express.Router()
const controller = require('../controllers/cameloLocaisControllers')


router.get('/', controller.getAllLocais)
router.get('/:_id', controller.getFindById)
router.get('/nome', controller.getFindByNome)


module.exports = router