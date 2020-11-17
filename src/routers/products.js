const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
router
    .get('/', productController.getProducts)
    .get('/:id', productController.detailProducts)
    .post('/', productController.insertProduct)
    .put('/:id', productController.updateProduct)
    .delete('/:iduser', productController.deleteProduct)
module.exports = router