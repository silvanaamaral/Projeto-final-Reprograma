 const express = require('express')
const router = express.Router()
const controller = require('../controllers/adminControllers')

router.get('/', controller.allAdmin)
router.post('/create', controller.createAdmin)
router.post('/login', controller.loginAdmin)
router.put('/admin/:id', controller.updateAdmin)
router.delete('/delete/:id', controller.removeAdminById) 

module.exports = router
 