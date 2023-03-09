const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('identifier.sqlite')


// Export functions to interact with the database
module.exports = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM todos', [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    },
};