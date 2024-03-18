import { connection as db } from "../config/index.js";

class Reactions {
    fetchReactions(req, res) {
        const qry = `
            SELECT * 
            FROM Reactions;
        `;

        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchReaction(req, res) {
        const qry = `
            SELECT *
            FROM Reactions
            WHERE ReactID = ${req.params.id};
        `;

        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    addReaction(req, res) {
        const { PostID, userID, ReactID } = req.body;

        const qry = `
            INSERT INTO Reactions (postId, userID, ReactID)
            VALUES (${PostID}, ${userID}, '${ReactID}');
        `;

        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                message: 'Reaction successfully added'
            });
        });
    }
}

export { Reactions };
