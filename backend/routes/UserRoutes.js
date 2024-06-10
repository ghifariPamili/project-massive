import express from "express";
// import { register, loginUser } from "../controllers/Auth.js";
import { createUser, getUsers, getUserById, getUserByEmail } from "../controllers/UserController.js";

const router = express.Router();


router.post('/registration', createUser);

export default router;
