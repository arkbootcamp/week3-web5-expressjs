require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
// const router = express.Router()
const PORT = process.env.PORT
const cors = require('cors')
const routerUsers = require('./src/routers/users')
const routerProducts = require('./src/routers/products')
const bodyParser = require('body-parser')
const helper = require('./src/helpers/helpers')
const routes = require('./src/routers/index')
// membuat middleware
const mymiddleware = (req, res, next) => {
  console.log('menjalan my middleware')
  // res.send('mymiddleware')
  next()
}

// use middleware

// cors
// var corsOptions = {
//     origin: 'http://locahost:5500/coba/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// add morgan
app.use(morgan('dev'))

// add mymiddleware
app.use(mymiddleware)

// router menggukan versi
app.use('/v1', routes)
app.use('/upload', express.static('./upload'))
// url not fount
app.use('*', (req, res, next) => {
// res.json()
const error = new Error('URL Not Found')
error.status = 400
  return next(error)
})

// error handling
app.use((err, req, res, next) => {
  helper.response(res, null, err.status, { message: err.message })
  // console.log("bla bla bla bla")
})
app.listen(PORT, () => console.log(`server is running port ${PORT}`))
