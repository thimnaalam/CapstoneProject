import { connection as Db } from "../config/index.js";
class Products{
    fetchProducts(req, res){
        const qry = `
        select ProdID, ProdType, Catorgory, Descriptions, userID
        from Products;
        `
        Db.query(qry, (err, results) => {
            if(err) throw err;
            res.json({
                status: res.statusCode, 
                results
            })
        })
    }
    fetchProduct(req, res){
        const qry = `
        select ProdID, ProdType, Catorgory, Descriptions, userID
        from Products
        where prodID = ${req.params.id}`

        Db.query(qry, (err, results) => {
            if(err) throw err;
            res.json({
                status: res.statusCode, 
                results
            })
        })
    }
    addProduct(req, res){
        const qry = `insert into Products set ?;`

        Db.query(qry,[req.body] ,(err) => {
            if(err) throw err;
            res.json({
                status: res.statusCode, 
                message: 'Product successfully added'
            })

    })
}}

export{
    Products
}