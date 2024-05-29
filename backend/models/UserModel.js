import db from '../config/Database.js';

const UserModel = {
    createUser: (userData, callback) => {
        const sql = 'INSERT INTO users SET ?';
        db.query(sql, userData, (err, result) => {
            if (err) throw err;
            callback(result.insertId);
        });
    },
    getUserByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.query(sql, [email], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    }
};

export default UserModel;
