import express from "express";
import { register, loginUser } from "../controllers/Auth.js";

const router = express.Router();

// Endpoint untuk mendaftarkan pengguna
router.post('/register', register);

// Endpoint untuk login pengguna
router.post('/login', loginUser);

export default router;
