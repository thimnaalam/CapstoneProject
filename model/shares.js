import { connection as db } from "../config/index.js";

class Shares {
    fetchShares(req, res) {
        const qry = `
            SELECT * 
            FROM Shares;
        `;

        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchShare(req, res) {
        const qry = `
            SELECT *
            FROM Shares
            WHERE ShareID = ${req.params.id};
        `;

        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    addShare(req, res) {
        const { SharesID, ShareContent, userID } = req.body;

        const qry = `
            INSERT INTO Shares (SharesID, ShareContent, userID)
            VALUES ('${SharesID}', '${ShareContent}', ${userID});
        `;

        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                message: 'Shared successfully !'
            });
        });
    }
}

export { Shares };
