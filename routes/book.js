const express = require('express')
const router = express.Router()

const bookController = require('../controllers/book')
const auth = require('../config/auth')

router.post('/generate', bookController.postBookGenerate)
router.get('/list', auth.verifyToken ,bookController.getAllBook)
router.get('/detail/:id', auth.verifyToken, bookController.getBookDetail)
router.get('/category/:cat', auth.verifyToken, bookController.getBookByCat)
router.post('/add', auth.verifyToken, bookController.postBook);
router.put('/update/:id', auth.verifyToken, bookController.putBook);
router.delete('/delete/:id', auth.verifyToken, bookController.deleteBook);

module.exports = router