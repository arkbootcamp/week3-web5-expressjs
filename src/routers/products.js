const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
router
    .get('/', productController.getProducts)
    .get('/:id', productController.detailProducts)
    .post('/', productController.updateProduct)
    .put('/:id', productController.updateProduct)
    .delete('/:iduser', productController.updateProduct)
module.exports = router