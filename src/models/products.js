const connection = require('../configs/db')
const {actionQuery} = require('../helpers/helpers')
const products = {
  countProduct: ()=>{
    return actionQuery('SELECT COUNT(*) AS totalData FROM products')
  },
  getProduct: (name, offset, limit) => {
    return actionQuery('SELECT * FROM products')
    // return new Promise((resolve, reject) => {
    //   if (name) {
    //     connection.query(`SELECT products.*, category.name AS name_category FROM products INNER JOIN category ON products.id_category = category.id where products.name LIKE ? LIMIT ${limit} OFFSET ${offset}`, `%${name}%`, (error, results) => {
    //       if (!error) {
    //         resolve(results)
    //       } else {
    //         reject(error)
    //       }
    //     })
    //   } else {
    //     connection.query('SELECT products.*, category.name AS name_category FROM products INNER JOIN category ON products.id_category = category.id', (error, results) => {
    //       if (!error) {
    //         resolve(results)
    //       } else {
    //         reject(error)
    //       }
    //     })
    //   }
    // })
  },
  // connection.query('SELECT * FROM products WHERE id = ?', id, (error, results) => {
  getProductById: (id) => {
    return actionQuery('SELECT * FROM products WHERE id = ?', id)
  },
  insertProduct: (data) => {
    return actionQuery('INSERT INTO products SET ?', data)
  },
  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM products WHERE id = ?', id, (error, results) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },
  updateProduct: (id, data) => {
    return actionQuery('UPDATE products SET ? WHERE id=?', [data, id])
    // return new Promise((resolve, reject) => {
    //   connection.query('UPDATE products SET ? WHERE id=?', [data, id], (error, results) => {
    //     if (!error) {
    //       resolve(results)
    //     } else {
    //       reject(error)
    //     }
    //   })
    // })
  }
}

module.exports = products
