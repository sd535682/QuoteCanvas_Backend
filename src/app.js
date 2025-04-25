import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";

const app = express();
// Middleware
app.use(express.json());

// Auth Routes
app.use('/api/v1/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send({ message: 'This is Quote Canvas!' });
});

export default app;
