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
    create: (title, description) => {
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO todos (title, description) VALUES (?, ?)', [title, description], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.lastID);
                }
            });
        });
    },
    delete: (id) => {
        return new Promise((resolve, reject) => {
            db.run('DELETE FROM todos WHERE id = ?', [id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
};