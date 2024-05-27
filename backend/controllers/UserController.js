import User from "../models/User.js";
import argon2 from "argon2";

export const registerUser = async (req, res) => {
    const { username, password, university, fullName, program, semester, whatsappNumber, nim, email } = req.body;
    try {
        const hashPassword = await argon2.hash(password);
        await User.create({
            username: username,
            password: hashPassword,
            university: university,
            fullName: fullName,
            program: program,
            semester: semester,
            whatsappNumber: whatsappNumber,
            nim: nim,
            email: email
        });
        res.status(201).json({ msg: "Registration Successful" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                username: username
            }
        });
        if (!user) return res.status(404).json({ msg: "User not found" });
        const match = await argon2.verify(user.password, password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });
        req.session.userId = user.id;
        res.status(200).json({ msg: "Login Successful" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
