import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

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

//routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
    console.log("Server is running on port no. 3000");
});