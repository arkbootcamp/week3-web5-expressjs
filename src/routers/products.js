const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
const { verifyAccess} = require('../middlewares/auth')
const {uploadMulter} = require('../middlewares/upload')
const { cacheAllProducts, delCacheAllProduct, getDetailProduct} = require('../middlewares/redis')

router
  .get('/', cacheAllProducts, productController.getProducts)
  .get('/:id', getDetailProduct, productController.detailProducts)
  .post('/', uploadMulter.single('image'), delCacheAllProduct, productController.insertProduct)
  .patch('/:id', verifyAccess, delCacheAllProduct, productController.updateProduct)
  .delete('/:iduser', delCacheAllProduct, verifyAccess, productController.deleteProduct)

module.exports = router
