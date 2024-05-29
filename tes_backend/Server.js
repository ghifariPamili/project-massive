const express = require('express');
const db = require('./config/Database');
const app = express();
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World!');
})

// app.post("/", (req, res) => {
//     res.send("create");
// })

// app.get("/data", (req, res) =>{
//     db.query("SELECT * FROM pelanggan", (err, results) =>{
//         console.log(results)
//     })
// } )

app.listen(port, () => {
  console.log(`server running in http://localhost:${port}`);
});