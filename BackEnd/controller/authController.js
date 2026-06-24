import User from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import generateToken from "../config/token.js";

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000
};

// ====================== SIGNUP ======================
export const signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        if (!["student", "educator"].includes(role)) {
            return res.status(400).json({
                message: "Invalid role. Role must be student or educator"
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        if (!validator.isEmail(normalizedEmail)) {
            return res.status(400).json({
                message: "Enter a valid email"
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must be at least 8 characters long"
            });
        }

        const existUser = await User.findOne({ email: normalizedEmail });

        if (existUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name: name.trim(),
            email: normalizedEmail,
            password: hashPassword,
            role
        });

        const token = generateToken(user._id);

        res.cookie("token", token, cookieOptions);

        return res.status(201).json({
            message: "Signup successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Signup error",
            error: error.message
        });
    }
};

// ====================== LOGIN ======================
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Please provide email and password"
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        if (!validator.isEmail(normalizedEmail)) {
            return res.status(400).json({
                message: "Enter a valid email"
            });
        }

        const user = await User.findOne({ email: normalizedEmail });

        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        const token = generateToken(user._id);

        res.cookie("token", token, cookieOptions);

        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Login error",
            error: error.message
        });
    }
};

// ====================== LOGOUT ======================
export const logout = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        return res.status(200).json({
            message: "Logout successful"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Logout error",
            error: error.message
        });
    }
};