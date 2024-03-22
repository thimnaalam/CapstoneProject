import { connection as Db } from "../config/index.js";
class Events{
    fetchEvents(req, res){
        const qry = `
        select eventID, Title, Dates, Catorgory, Descriptions, userID
        from Events;
        `
        Db.query(qry, (err, results) => {
            if(err) throw err;
            res.json({
                status: res.statusCode, 
                results
            })
        })
    }
    fetchEvent(req, res){
        const qry = `
        select eventID, Title, Dates, Catorgory, Descriptions, userID
        from Events;
        where eventID = ${req.params.id}`

        Db.query(qry, (err, results) => {
            if(err) throw err;
            res.json({
                status: res.statusCode, 
                results
            })
        })
    }
    addEvent(req, res){
        const qry = `insert into Events set ?;`

        Db.query(qry,[req.body] ,(err) => {
            if(err) throw err;
            res.json({
                status: res.statusCode, 
                message: 'Event successfully added'
            })

    })
}}

export{
    Events
}
