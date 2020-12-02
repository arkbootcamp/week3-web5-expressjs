const redis = require('redis')
const client = redis.createClient(6379)

const {response} = require('../helpers/helpers')

exports.cacheAllProducts =(req, res, next) =>{
  client.get("getAllProducts", function (err, data) {

    
    if (data !== null){
      const result = JSON.parse(data)
      return response(res, result, 200, null)
    }else{
      next()
    }
  });
}

exports.delCacheAllProduct = (req, res, nex) =>{
  client.del("getAllProducts")
  next()
}

exports.getDetailProduct =(req, res, next) =>{
  const id = req.params.id
  client.get("product"+id, function (err, data) {

    if (data !== null) {
        const result = JSON.parse(data)
      return response(res, result, 200, null)
    } else {
      next()
    }
  });
}