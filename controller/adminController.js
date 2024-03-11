import { admin} from '../model/index.js'
import express from 'express'
import bodyParser from 'body-parser'
import { verifyAToken } from '../middleware/UserAuthentication.js'

const adminRouter = express.Router()
 
// Fetch admin
adminRouter.get('/', (req, res)=>{
    try{
        admin.fetchAdmin(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
    }
})
//  Fetch admin 
adminRouter.get('/:id', (req, res)=>{
    try{
        admin.fetchAdmin(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a admin'
        })
    }
})
// Add a admin 
adminRouter.post('/register',bodyParser.json, (req, res)=>{
    try{
        users.createAdmin(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to add a new admin'
        })
    }
})
export{
    adminRouter, express
}