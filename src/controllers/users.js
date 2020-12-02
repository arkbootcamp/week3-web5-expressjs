const bcrypt = require('bcryptjs')
const helper = require('../helpers/helpers')
const {checkUser, insertUser} = require('../models/users')
const jwt = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');
const {sendEmail} = require('../helpers/email')


exports.loginUser = (req, res) =>{
const {email, password} = req.body
  checkUser(email)
  .then((result)=>{
    const user = result[0]
    // compare/verify password
    bcrypt.compare(password, user.password, function (err, resCheck) {
      if (!resCheck) return helper.response(res, null, 401, { error: 'password wrong !!' })
      delete user.password
      
      // jsonwebtoken
      // const option = { expiresIn: '1h'}
      // const payload = { userID: user.id, email: user.email }

      // 
      jwt.sign({ userID: user.id, email: user.email, roleID: user.role_id }, process.env.SECRET_KEY, { expiresIn: '24h' }, function (err, token) {
        // return res.send(token);
        user.token = token
        return helper.response(res, user, 200, null)
      });
    });
  })

}

exports.registerUser = (req, res) => {
  console.log('register controller')
  const id = uuidv4()
  const {
    email,
    password,
    phone,
    fullName
  } = req.body
  
  checkUser(email)
  .then((result)=>{
    console.log()
    if (result.length > 0) return helper.response(res, null, 401, {error: 'email sudah ada'})

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        const data = {
          id,
          email,
          password: hash,
          phone, 
          fullName,
          updatedAt: new Date(),
          createdAt: new Date()
        }
        insertUser(data)
        .then(()=>{
          return helper.response(res, {message: 'register berhasil'}, 201, null)
        })
      });
    });
  
  })

  
}
exports.sendEmail= (req, res) => {
  const email = req.body.email
  const message = req.body.message
  sendEmail(email, message)
  .then((res)=>{
    console.log(res)
    // return helper.response(res, { id: res.messageId}, 200, null)
    return helper.response(res, {message: 'send email success'}, 500,null)
  })
  .catch((err)=>{
    return helper.response(res, null, 500, {
      message: 'error send email'
    })
  })
}