const express = require('express')
const router = express.Router()
const controller = require('../controllers/cameloControllers')


router.get('/', controller.getAllCamelo)

//router.get('/camelo2', controller.getAll)
//router.post('/create', controller.createCamelo)



module.exports = router