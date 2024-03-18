import { connection as db } from "../config/index.js";

const postModel = {
    getAllPosts: (callback) => {
        const qry = `
            SELECT * 
            FROM Posts;
        `;

        db.query(qry, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },

    getPostById: (id, callback) => {
        const qry = `
            SELECT *
            FROM Posts
            WHERE PostID = ${id};
        `;

        db.query(qry, (err, results) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, results);
        });
    },

    createPost: (PostRef, PostContent, callback) => {
        const qry = `
            INSERT INTO Posts (PostRef, PostContent)
            VALUES ('${PostRef}', '${PostContent}');
        `;

        db.query(qry, (err) => {
            if (err) {
                return callback(err);
            }
            callback(null);
        });
    },

    updatePost: (id, PostRef, content, callback) => {
        const qry = `
            UPDATE posts
            SET title = '${PostRef}', content = '${content}'
            WHERE postID = ${id};
        `;

        db.query(qry, (err) => {
            if (err) {
                return callback(err);
            }
            callback(null);
        });
    },

    deletePost: (id, callback) => {
        const qry = `
            DELETE FROM Posts
            WHERE PostID = ${id};
        `;

        db.query(qry, (err) => {
            if (err) {
                return callback(err);
            }
            callback(null);
        });
    }
};

export default postModel;
