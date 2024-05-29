// cara callback
// const mysql = require("mysql2")

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'toko_online',
//     password: '',
// })

// db.connect((err) =>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("Terhubung ke database dengan ID" + db.threadId)
// })


// cara promise
const mysql = require("mysql2/promise")

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'toko_online',
    password: '',
})

db.getConnection()
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.error("Database Connection Failed:" + err))


module.exports = db