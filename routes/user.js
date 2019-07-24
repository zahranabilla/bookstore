const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

router.post('/generate', userController.postGenerateUser)
router.post('/login', userController.postLogin)

module.exports = router