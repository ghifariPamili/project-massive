import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import Users from './models/UserModel.js';
import userRoutes from './routes/UserRoutes.js';
import db from './config/Database.js';

dotenv.config();

// Membuat instance aplikasi Express
const app = express();

// Mengecek koneksi ke database
// db.authenticate()
//     .then(() => console.log('Database tersambung...'))
//     .catch(err => console.log('Tidak dapat tersambung ke database:', err));

// Menggunakan middleware session untuk manajemen sesi pengguna
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: 'auto' 
    }
}));

// Middleware untuk menangani CORS
app.use(cors());

// Middleware untuk parsing JSON dan data url-encoded dari request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menambahkan routing dari userRoutes
app.use(userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Menjalankan server pada port yang ditentukan dalam file .env
app.listen(process.env.APP_PORT, () => {
    console.log('Server Up and running... in http://localhost:5000');
});