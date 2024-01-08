import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import path from "path";
import cookieParser from "cookie-parser";
import listingRouter from './routes/listing.route.js';

dotenv.config();
const app = express();
app.use(express.json());


//mongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully")
    }).catch((error) => {
        console.log(error)
    });

const __dirname = path.resolve();

app.listen(3000, () => {
    console.log("Server is running on port no. 3000");
});



app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})


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


