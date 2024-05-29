const express = require('express');
const db = require('./config/Database');
const app = express();
const port = 8000

app.use(express.json)

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/users', (req, res) => {
  res.send('Hello Bro!');
})

app.post("/users", (req, res) => {
  console.log(req.body)  
  res.send("create");
})
app.put("/users", (req, res) => {
    res.send("Update!");
})
app.delete("/users", (req, res) => {
    res.send("delete");
})
//cara callback
// app.get("/data", (req, res) =>{
//     db.query("SELECT * FROM pelanggan", (err, results) =>{
//         console.log(results)
//     })
// } )

//cara promise
app.get("/data", async (req, res) =>{
  try{
    const[results, fields] = await db.query("SELECT * FROM pelanggan")
    
    console.log(results)
    console.log(fields)
    res.json(results)
  } catch(error) {
    console.log(error);
  }

})

app.listen(port, () => {
  console.log(`server running in http://localhost:${port}`);
});