import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();
// Middleware
app.use(express.json());

// Auth Routes
app.use('/api/v1/auth', authRouter);

// User Routes
app.use('/api/v1/users', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send({ message: 'This is Quote Canvas!' });
});

export default app;
