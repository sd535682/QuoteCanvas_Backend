import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";

// Declare Router
const userRouter = Router();

// GET all users
userRouter.get("/", authorize, getUsers);

// GET user by ID
userRouter.get("/:id", authorize, getUser);

export default userRouter;
