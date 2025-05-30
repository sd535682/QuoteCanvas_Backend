import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.get("/", authorize, (req, res) => {
  res.status(200).json({
    valid: true,
    user: req.user,
  });
});

export default authRouter;
