const {countProduct} = require('../models/products')

exports.pagination = async(limit,page)=>{
  const products = await countProduct()
  // console.log(products[0].totalData)
  const totalData = products[0].totalData
  const totalPage = Math.ceil(totalData / limit)
  const setPagination = {
    totalData: totalData,
    totalPage,
    currentPage: page,
    perPage: limit,
    prevPage: page > 1 ? `${process.env.BASE_URL}/v1/products?page=${page-1}&limit=${limit}`:null,
    nextPage: page < totalPage ? `${process.env.BASE_URL}/v1/products?page=${page + 1}&limit=${limit}` : null,
  }
  return setPagination
}