const express = require('express')
const route = express.Router()
const routeUser = require('./users')
const routeProducts = require('./products')

route
  .use('/users', routeUser)
  .use('/products', routeProducts)
  
module.exports = route
// satasdfsdfsdf