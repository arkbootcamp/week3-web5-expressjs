const products = {
    getProducts:(req, res)=>{
        res.send('mengambil semua data product dengan query search '+ req.query.search)
    },
    detailProducts:(req, res)=>{
        res.send('ini router product dengan params '+ req.params.id)
    },
    insertProduct: (req, res)=>{
        res.send('ini user  menggunakan method post dengan router')
    },
    updateProduct: (req, res)=>{
        res.send('ini user  menggunakan method pust login dengan router dan id '+ req.params.id)
    },
    deleteProduct:(req, res)=>{
        res.send('ini user  menggunakan method delete login dengan router'+req.params.iduser)
    }
}

module.exports = products