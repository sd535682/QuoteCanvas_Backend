import express, { urlencoded } from "express";
import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import { connectMongoDB } from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();
// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: false }));

// Error Middleware
app.use(errorMiddleware);

// Auth Routes
app.use("/api/v1/auth", authRouter);

// User Routes
app.use("/api/v1/users", userRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectMongoDB();
});

app.get("/", (req, res) => {
  res.send({ message: "This is Quote Canvas!" });
});

export default app;
