import db from '../config/Database.js';

const UserModel = {
    createUser: (userData) => {
        return new Promise((resolve, reject) => {
            const columns = Object.keys(userData).join(', ');
            const placeholders = Object.keys(userData).map(() => '?').join(', ');
            const values = Object.values(userData);

            const sql = `INSERT INTO pengguna (${columns}) VALUES (${placeholders})`;

            db.query(sql, values, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve({ insertId: result.insertId });
            });
        });
    },
    getUserByEmail: (email) => {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM users WHERE email = ?';
            db.query(sql, [email], (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            });
        });
    }
};
export default UserModel;
