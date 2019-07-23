const express = require('express')
const router = express.Router()

const bookController = require('../controllers/book')

router.post('/generate', bookController.postBookGenerate)
router.get('/list', bookController.getAllBook)
router.get('/detail/:id', bookController.getBookDetail)
router.get('/category/:cat', bookController.getBookByCat)
router.post('/add', bookController.postBook);
router.put('/update/:id', bookController.putBook);
router.delete('/delete/:id', bookController.deleteBook);

module.exports = router