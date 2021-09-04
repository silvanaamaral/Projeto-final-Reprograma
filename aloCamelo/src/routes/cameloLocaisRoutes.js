const express = require('express')
const router = express.Router()
const controller = require('../controllers/cameloLocaisControllers')


router.get('/', controller.getAllLocais)



module.exports = router