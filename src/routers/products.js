const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
const cobamiddleware=(req, res, next)=>{
    console.log('saya menjalankan middleware di router')
    // res.send('hello')
    next()
}
router
    .get('/', cobamiddleware, productController.getProducts)
    .get('/:id', productController.detailProducts)
    .post('/', productController.insertProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:iduser', productController.deleteProduct)
module.exports = router