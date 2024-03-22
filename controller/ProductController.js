import { products } from '../model/index.js'
import express from 'express'
import bodyParser from 'body-parser'

const productRouter = express.Router()

// Fetch all products
productRouter.get('/', (req, res)=>{
    try{
        products.fetchProducts(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve products'
        })
    }
})
//  Fetch product 
productRouter.get('/:id', (req, res)=>{
    try{
        products.fetchProduct(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a product'
        })
    }
})

export{
    productRouter
}