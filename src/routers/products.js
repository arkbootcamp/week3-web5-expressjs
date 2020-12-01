const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
const { verifyAccess} = require('../middlewares/auth')
const {uploadMulter} = require('../middlewares/upload')

router
  .get('/', verifyAccess, productController.getProducts)
  .get('/:id', verifyAccess, productController.detailProducts)
  .post('/', uploadMulter.single('image'), productController.insertProduct)
  .patch('/:id', verifyAccess, productController.updateProduct)
  .delete('/:iduser', verifyAccess, productController.deleteProduct)

module.exports = router
