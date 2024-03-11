import { users} from '../model/index.js'
import express from 'express'
import bodyParser from 'body-parser'
import { verifyAToken } from '../middleware/UserAuthentication.js'

const userRouter = express.Router()
// const{Users} = require('../model')

// Fetch users
// userRouter.get('/', (req, res)=>{
//     try{
//         users.fetchUsers(req, res)
//     }catch(e){
//         res.json({
//             status: res.statusCode,
//             msg: 'Failed to retrieve users'
//         })
//     }
// })
// //  Fetch user 
// userRouter.get('/:id', (req, res)=>{
//     try{
//         users.fetchUser(req, res)
//     }catch(e){
//         res.json({
//             status: res.statusCode,
//             msg: 'Failed to retrieve a user'
//         })
//     }
// })
// // Add a user 
// userRouter.post('/register',bodyParser.json, (req, res)=>{
//     try{
//         users.createUser(req, res)
//     }catch(e){
//         res.json({
//             status: res.statusCode,
//             msg: 'Failed to add a new user'
//         })
//     }
// })


userRouter.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
userRouter.get('/users/:id', (req, res)=>{
    users.fetchUser(req, res)
})
userRouter.post('/register',bodyParser.json(),
(req, res)=>{
    users.register(req, res)
})
userRouter.put('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
userRouter.patch('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
userRouter.delete('/user/:id', (req, res)=>{
    users.delete(req, res)
})
userRouter.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})


export{
    userRouter, express
}