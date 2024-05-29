import express from "express";
import { registerUser, loginUser } from "../controllers/UserController.js";

const router = express.Router();

// Endpoint untuk mendaftarkan pengguna
router.post('/register', registerUser);

// Endpoint untuk login pengguna
router.post('/login', loginUser);

export default router;
