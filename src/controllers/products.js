const modelProducts = require('../models/products')
const helper = require('../helpers/helpers')
const products = {
    getProducts:(req, res)=>{
        modelProducts.getProduct()
        .then(result=>{
            const resultProdcut = result
            // res.send(resultProdcut)
            helper.response(res, resultProdcut, 200, null)
            // res.json(resultProdcut)
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
            helper.response(res, resultProdcut, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    insertProduct: (req, res)=>{
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
            helper.response(res, resultProdcut, 201, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    updateProduct: (req, res)=>{
        const id = req.params.id
        const name = req.body.name || ''
        const description = req.body.description || ''
        const price = req.body.price || 0
        const data = {
            name,
            description,
            price,
        }
        modelProducts.updateProduct(id, data)
        .then((result)=>{
            const dataResult = result
            dataResult.hello = "helo world"
            helper.response(res, dataResult, 200, null)
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    updateProduct2: (req, res)=>{
        const id = req.params.id
        
        const name = req.body.name 
        const description = req.body.description
        const price = req.body.price
        const data = {}
        if(name){
            data.name = name
        }
        if(description){
            data.description = description
        }
        if(price){
            data.price = price
        }
        
        modelProducts.updateProduct(id, data)
        .then((result)=>{
            const dataResult = result
            helper.response(res, dataResult, 200, null)
        })
        .catch((error)=>{
            console.log(error)
        })
    },
    deleteProduct:(req, res)=>{
        const id = req.params.iduser
        modelProducts.deleteProduct(id)
        .then(result=>{
            const resultProdcut = result
            helper.response(res, resultProdcut, 200, null)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

module.exports = products