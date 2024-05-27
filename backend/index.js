import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import userRoutes from "./routes/UserRoutes.js";

dotenv.config();

// Membuat instance aplikasi Express
const app = express();

// Menggunakan middleware session untuk manajemen sesi pengguna
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: 'auto' 
    }
}));

// Menggunakan middleware CORS untuk mengizinkan akses dari frontend di localhost:3000
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
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
