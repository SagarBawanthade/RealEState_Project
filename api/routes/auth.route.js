import express from "express";
import { signin, signup, google } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/google", google);

export default router;