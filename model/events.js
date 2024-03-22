
import { connection as Db } from "../config/index.js";

const Events = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      const qry = `
        SELECT 
        eventID, Title, Dates, Descriptions, Category, userID
        FROM Events;
      `;
      Db.query(qry, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getById: (eventID) => {
    return new Promise((resolve, reject) => {
      const qry = `
        SELECT
         eventID, Title, Dates, Descriptions, Category, userID
        FROM Events
        WHERE eventID = ${eventID};
      `;
      Db.query(qry, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]);
        }
      });
    });
  },

  create: (eventData) => {
    return new Promise((resolve, reject) => {
      const { Title, Dates, Descriptions, Category } = eventData;
      const qry = `
        INSERT INTO vents (title, date, description, category)
        VALUES ('${Title}', '${Dates}', '${Descriptions}', '${Category}');
      `;
      Db.query(qry, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.insertId);
        }
      });
    });
  },

  update: (eventID, eventData) => {
    return new Promise((resolve, reject) => {
      const { Title, Dates, Descriptions, Category } = eventData;
      const qry = `
        UPDATE Events
        SET Title = '${Title}', Dates = '${Dates}', Descriptions = '${Descriptions}', Category = '${Category}'
        WHERE eventID = ${eventID};
      `;
      Db.query(qry, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.affectedRows > 0);
        }
      });
    });
  },

  delete: (eventID) => {
    return new Promise((resolve, reject) => {
      const qry = `
        DELETE FROM Events
        WHERE eventID = ${eventID};
      `;
      Db.query(qry, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.affectedRows > 0);
        }
      });
    });
  }
}
export {
     Events
}