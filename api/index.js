import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();
const app = express();


//mongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully")
    }).catch((error) => {
        console.log(error)
    })


app.use("/api/user", userRouter);

app.listen(3000, () => {
    console.log("Server is running on port no. 3000");
});