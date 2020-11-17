const express = require('express')
const router = express.Router()
router
    .get('/', (req, res)=>{
        res.send('ini user 1 menggunakan router')
    })
    
    .post('/', (req, res)=>{
        res.send('ini user  menggunakan method post dengan router')
    })
    .post('/login', (req, res)=>{
        res.send('ini user  menggunakan method post login dengan router')
    })
    .get('/blabla', (req, res)=>{
        res.send('ini method bla bla')
    })

module.exports = router