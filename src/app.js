import express from "express";
import { PORT } from "./config/env.js";

const app = express();
console.log(`Port: ${PORT}`);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send({ message: 'This is Quote Canvas!' });
});

export default app;
