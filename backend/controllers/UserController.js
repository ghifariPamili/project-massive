import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";


export const getUsers = (req, res) =>{
    
}
export const getUserById = (req, res) =>{

}
export const getUserByEmail = (req, res) =>{

}
export const createUser = async (req, res) => {
    const { username, password, university, fullName, program, semester, whatsappNumber, nim, email } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 28);
         await Users.create({
            username : username,
            password : hashedPassword,
            university : university,
            fullName:fullName,
            program:program,
            semester:semester,
            whatsappNumber:whatsappNumber,
            nim:nim,
            email:email
        });
        res.status(201).json({message:"sukses"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

