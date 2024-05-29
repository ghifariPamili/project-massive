import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

// Fungsi untuk mendaftarkan pengguna baru
export const registerUser = async (req, res) => {
    const { username, password, email } = req.body;
    try {
        // Hash password sebelum menyimpan ke database
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword, email });
        res.status(201).json({ message: 'Pendaftaran berhasil', user: newUser });
    } catch (error) {
        console.error('Error saat pendaftaran:', error);
        res.status(500).json({ message: 'Pendaftaran gagal', error: error.message });
    }
};

// Fungsi untuk login pengguna
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password salah' });
        }
        
        res.status(200).json({ message: 'Login berhasil', user });
    } catch (error) {
        console.error('Error saat login:', error);
        res.status(500).json({ message: 'Login gagal', error: error.message });
    }
};
