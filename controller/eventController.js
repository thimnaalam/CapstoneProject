import { events } from '../model/index.js'
import express from 'express'
import bodyParser from 'body-parser'

const eventRouter = express.Router()


eventRouter.get('/', (req, res)=>{
    try{
        events.fetchEvents(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve events'
        })
    }
})

eventRouter.get('/:id', (req, res)=>{
    try{
        events.fetchEvents(req, res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a event'
        })
    }
})

export{
    eventRouter
}
