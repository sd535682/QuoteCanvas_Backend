import { Router } from "express";

// Declare Router
const userRouter = Router();

// GET all users
userRouter.get('/', (req, res) => res.send({ message: 'GET all users' }));

// GET user by ID
userRouter.get('/:id', (req, res) => res.send({ message: 'GET user by ID' }));

// POST new user
userRouter.post('/', (req, res) => res.send({ message: 'POST new user' }));

// PUT update user
userRouter.put('/:id', (req, res) => res.send({ message: 'PUT update user' }));

// DELETE user
userRouter.delete('/:id', (req, res) => res.send({ message: 'DELETE user' }));

export default userRouter;