import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import connectDB from "./config/connectDB.js";
import authRouter from "./routes/authRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Server Start.");
});

const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server running on PORT ${port}`);
        });
    } catch (error) {
        console.log("Server start error:", error.message);
    }
};

startServer();