import { Router } from "express";
import { login, register, logout } from "../controllers/auth.controller.js";

// Declare Router
const authRouter = Router();

// Auth Route - Login
authRouter.post("/login", login);

// Auth Route - Register
authRouter.post("/register", register);

// Auth Route - Logout
authRouter.post("/logout", logout);

export default authRouter;