const express = require('express')
const morgan = require('morgan')
const app = express()
const router = express.Router()
const PORT = 4000
const routerUsers = require('./src/routers/users')
const routerProducts = require('./src/routers/products')
app.use(morgan('dev'))

// membuat middleware
const mymiddleware = (req, res, next) =>{
console.log('menjalan my middleware')
// res.send('mymiddleware')
next()
}

app.use(mymiddleware)


// menenggukan router
app.use('/users',routerUsers)
app.use('/products', routerProducts)


app.listen(PORT, ()=> console.log(`server is running port ${PORT}`))