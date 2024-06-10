
import bcrypt from "bcrypt";
// Fungsi untuk mendaftarkan pengguna baru
export const register = async (req, res) => {
    const { password, email, nim } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userData = { password: hashedPassword, email, nim };

        console.log('Registering user with data:', userData);

        const newUser = await UserModel.createUser(userData);
        res.status(200).json({ message: 'Pendaftaran berhasil', user: newUser });
    } catch (error) {
        console.error('Error saat pendaftaran:', error);
        res.status(500).json({ message: 'Pendaftaran gagal', error: error.message });
    }
};

// Fungsi untuk login pengguna
export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel.getUserByEmail(username);
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
