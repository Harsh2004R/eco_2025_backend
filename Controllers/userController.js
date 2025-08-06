import { userModel } from "../Models/user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()


export const userLoginController = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(401).json({ msg: "User must provide email or password" })
    }
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(402).json({ msg: "User email not found" })
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(403).json({ msg: "Invalid password or credentials" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '12h' });
        res.status(200).json({
            msg: "Login successful",
            token: token,
            user: {
                userId: user._id,
                email: user.email,
            }
        });
    } catch (error) {
        res.status(450).json({ msg: "Fail all request to login user...", error: error.message })
    }
}







export const userRegistration = async (req, res) => {
    const { phone, email, password } = req.body;
    const userExistFlag = await userModel.findOne({ email });
    if (userExistFlag) {
        res.status(400).json({ msg: "User Already Exist....in data base" })
    }
    try {
        const hashedPass = await bcrypt.hash(password, 5);
        const newUser = new userModel({ phone, email, password: hashedPass });
        await newUser.save();
        res.status(200).json({ msg: "New user created", data: req.body, })
    } catch (error) {
        res.status(500).json({ msg: "Failed to add new user", error: error.message });
    }
}







