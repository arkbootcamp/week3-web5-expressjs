const connection = require('../configs/db')

const products = {
    getProduct: ()=>{
        return new Promise((resolve, reject)=>{
            connection.query("SELECT * FROM products", (error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    getProductById: (id)=>{
        return new Promise((resolve, reject)=>{
            connection.query("SELECT * FROM products WHERE id = ?", id,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    insertProduct: (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query("INSERT INTO products SET ?", data,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
    deleteProduct: (id)=>{
        return new Promise((resolve, reject)=>{
            connection.query("DELETE FROM products WHERE id = ?", id,(error, results)=>{
                if(!error){
                    resolve(results)
                }else{
                    reject(error)
                }
            })
        })
    },
}

module.exports = products