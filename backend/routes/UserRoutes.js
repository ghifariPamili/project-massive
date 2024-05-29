import express from "express";
import { registrationData, loginUser } from "../controllers/UserController.js";

const router = express.Router();

// Endpoint untuk mendaftarkan pengguna
router.post('/register', registrationData);

// Endpoint untuk login pengguna
router.post('/login', loginUser);

export default router;
