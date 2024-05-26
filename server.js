const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfigurasi koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'project_massive' 
});

// Membuka koneksi ke database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});

// Endpoint untuk menyimpan data pengguna baru
app.post('/register', (req, res) => {
  const { nim, email, password } = req.body;
  const query = 'INSERT INTO users (nim, email, password) VALUES (?, ?, ?)';
  connection.query(query, [nim, email, password], (err, result) => {
    if (err) {
      console.error('Error executing query: ', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('New user registered');
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
