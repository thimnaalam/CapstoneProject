import { connection as db } from "../config/index.js";

class Comments {
    fetchComments(req, res) {
        const qry = `
            SELECT * 
            FROM Comments;
        `;

        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchComment(req, res) {
        const qry = `
            SELECT *
            FROM Comments
            WHERE CommID = ${req.params.id};
        `;

        db.query(qry, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    addComment(req, res) {
        const { PostID, userID, CommContent } = req.body; // Assuming request body contains postId, userId, and content

        const qry = `
            INSERT INTO Comments (PostID, userId, CommContent)
            VALUES (${PostID}, ${userID}, '${CommContent}');
        `;

        db.query(qry, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                message: 'Comment successfully added'
            });
        });
    }
}

export { Comments };