import { connection as Db } from "../config/index.js";
class Events{
    fetchEvents(req, res){
        const qry = `
        select EventID, Title, Dates, Category, Descriptions, userID
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
        select EventID, Title, Dates, Category, Descriptions, userID
        from Events;
        where EventID = ${req.params.id}`

        Db.query(qry, (err, result) => {
            if(err) throw err;
            res.json({
                status: res.statusCode, 
                result: result[0]
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
