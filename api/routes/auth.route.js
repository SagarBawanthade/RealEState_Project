import express from "express";
import { signin, signup, signOut, google } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/google", google);

router.get("/signout", signOut);

export default router;