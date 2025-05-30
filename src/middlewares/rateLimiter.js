import { rateLimit } from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 4,
  message: {
    status: 429,
    error: "Too many requests",
    message: "Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
