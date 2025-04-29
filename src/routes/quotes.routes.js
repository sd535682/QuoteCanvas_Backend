import { Router } from "express";
import { authorize } from "../middlewares/auth.middleware.js";
import { getAllQuotes, getQuoteById, createQuote, updateQuote, deleteQuote } from "../controllers/quotes.controller.js";

const quoteRouter = Router();

quoteRouter.get("/", authorize, getAllQuotes);

quoteRouter.get("/:id", authorize, getQuoteById);

quoteRouter.post("/", authorize, createQuote);

quoteRouter.put("/:id", authorize, updateQuote);

quoteRouter.delete("/:id", authorize, deleteQuote);

export default quoteRouter;
