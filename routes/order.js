const express = require('express')
const router = express.Router()

const orderController = require('../controllers/order')
const auth = require('../config/auth')

router.post('/create', auth.verifyToken, orderController.postCreateOrder)
router.get('/detail/:id', auth.verifyToken, orderController.getOrderDetail)

module.exports = router