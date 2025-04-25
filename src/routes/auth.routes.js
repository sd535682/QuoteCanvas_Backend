import { Router } from "express";

// Declare Router
const authRouter = Router();

// Auth Route - Login
authRouter.post('/login', (req, res) => res.send({ message: 'Login' }));

// Auth Route - Register
authRouter.post('/register', (req, res) => res.send({ message: 'Register' }));

// Auth Route - Logout
authRouter.post('/logout', (req, res) => res.send({ message: 'Logout' }));

export default authRouter;