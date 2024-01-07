import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());


//mongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully")
    }).catch((error) => {
        console.log(error)
    })

app.listen(3000, () => {
    console.log("Server is running on port no. 3000");
});


//routes
// Enable CORS for all routes
app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


//middlewares
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


