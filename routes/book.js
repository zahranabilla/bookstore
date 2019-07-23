const express = require('express')
const router = express.Router()

const bookController = require('../controllers/book')

router.post('/generate', bookController.postBookGenerate)
router.get('/list', bookController.getAllBook)
router.get('/detail/:id', bookController.getBookDetail)
router.get('/category/:cat', bookController.getBookByCat)

module.exports = router