const express = require('express')
const router = express.Router()
const { registerUser, loginUser, sendEmail} = require('../controllers/users')


router
  .post('/login', loginUser)
  .post('/register', registerUser)
  .post('/email', sendEmail)

module.exports = router
