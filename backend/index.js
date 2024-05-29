import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import db from './config/Database.js';
import userRoutes from './routes/UserRoutes.js';

dotenv.config();

// Membuat instance aplikasi Express
const app = express();

// Mengecek koneksi ke database
db.authenticate()
    .then(() => console.log('Database tersambung...'))
    .catch(err => console.log('Tidak dapat tersambung ke database:', err));

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
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5000' // Mengizinkan akses dari frontend di localhost:3000
}));

// Middleware untuk parsing JSON dan data url-encoded dari request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Menambahkan routing dari userRoutes
app.use('/api', userRoutes);

// Menjalankan server pada port yang ditentukan dalam file .env
app.listen(process.env.APP_PORT, () => {
    console.log('Server Up and running...');
});