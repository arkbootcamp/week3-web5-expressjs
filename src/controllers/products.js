const modelProducts = require('../models/products')
const helper = require('../helpers/helpers')
const createError = require('http-errors')
const products = {
  getProducts: (req, res, next) => {
    const name = req.query.name || null
    const page = req.query.page || 1
    const limit = req.query.limit || 3
    const offset = (page - 1) * limit
    const idSaya = req.userSaya
    console.log(idSaya)
    modelProducts.getProduct(name, offset, limit)
      .then(result => {
        const resultProdcut = result
        helper.response(res, resultProdcut, 200, null)
      })
      .catch(() => {
        const error = createError.InternalServerError("data bla bla")
        return next(error)
      })
  },
  detailProducts: (req, res, next) => {
    const id = req.params.id
    modelProducts.getProductById(id)
      .then(result => {
        const resultProdcut = result
        // res.send(resultProdcut)
        // console.log(resultProdcut)
        // const error = {
        //   message: 'id not found'
        // }
        if (resultProdcut.length === 0) {
          const error = new Error('id not found')
          error.status = 404
          return next(error)
          // return helper.response(res, null, 404, error)
        }
        helper.response(res, resultProdcut, 200, null)
      })
      .catch((err) => {
        // console.log(err)
        return helper.response(res, null, 500, {
          meesage: 'database problem'
        })
      })
  },
  insertProduct: (req, res) => {
    const { name, description, price, id_category } = req.body
    const data = {
      name,
      description,
      price,
      id_category,
      image: `${process.env.BASE_URL}/upload/${req.file.filename}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    modelProducts.insertProduct(data)
      .then(result => {
        const resultProdcut = result
        // res.send(resultProdcut)
        helper.response(res, resultProdcut, 201, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  updateProduct: (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const data = {
      name,
      description,
      price
    }
    modelProducts.updateProduct(id, data)
      .then((result) => {
        const dataResult = result
        dataResult.hello = 'helo world'
        helper.response(res, dataResult, 200, null)
      })
      .catch((error) => {
        return next(error)
      })
  },
  updateProduct2: (req, res) => {
    const id = req.params.id

    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const data = {}
    if (name) {
      data.name = name
    }
    if (description) {
      data.description = description
    }
    if (price) {
      data.price = price
    }

    modelProducts.updateProduct(id, data)
      .then((result) => {
        const dataResult = result
        helper.response(res, dataResult, 200, null)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  deleteProduct: (req, res) => {
    const id = req.params.iduser
    modelProducts.deleteProduct(id)
      .then(result => {
        const resultProdcut = result
        helper.response(res, resultProdcut, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

module.exports = products
