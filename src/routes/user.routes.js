import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";

// Declare Router
const userRouter = Router();

// GET all users
userRouter.get("/", authorize, getUsers);

// GET user by ID
userRouter.get("/:id", authorize, getUser);

// POST new user
userRouter.post('/', (req, res) => res.send({ message: 'POST new user' }));

// PUT update user
userRouter.put('/:id', (req, res) => res.send({ message: 'PUT update user' }));

// DELETE user
userRouter.delete('/:id', (req, res) => res.send({ message: 'DELETE user' }));

export default userRouter;