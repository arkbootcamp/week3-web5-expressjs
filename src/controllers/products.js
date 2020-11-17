const { throws } = require('assert')
const modelProducts = require('../models/products')
const products = {
    getProducts:(req, res)=>{
        modelProducts.getProduct()
        .then(result=>{
            const resultProdcut = result
            // res.send(resultProdcut)
            res.json(resultProdcut)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    detailProducts:(req, res)=>{
        const id = req.params.id
        modelProducts.getProductById(id)
        .then(result=>{
            const resultProdcut = result
            // res.send(resultProdcut)
            res.json(resultProdcut)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    insertProduct: (req, res)=>{
        // const id = req.params.id
        // console.log(req.body.name)
        // const name = req.body.name
        // const description = req.body.description
        // const price = req.body.price
        const {name, description, price} = req.body

        const data = {
            name,
            description,
            price,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        modelProducts.insertProduct(data)
        .then(result=>{
            const resultProdcut = result
            // res.send(resultProdcut)
            res.json(resultProdcut)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateProduct: (req, res)=>{
        res.send('ini user  menggunakan method pust login dengan router dan id '+ req.params.id)
    },
    deleteProduct:(req, res)=>{
        const id = req.params.iduser
        modelProducts.deleteProduct(id)
        .then(result=>{
            const resultProdcut = result
            // res.send(resultProdcut)
            res.json(resultProdcut)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = products