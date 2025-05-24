import { Quote } from "../models/quotes.model.js";
import { getPaginationParams, getPaginationMeta } from "../utils/pagination.js";

export const getAllPublicQuotes = async (req, res, next) => {
  try {
    const { page, limit, skip } = getPaginationParams(req);
    const total = await Quote.countDocuments();
    const quotes = await Quote.find({})
      .populate("user", "name")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: quotes,
      pagination: getPaginationMeta(total, page, limit),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

// Get all quotes for the authenticated user
export const getAllQuotes = async (req, res, next) => {
  try {
    const { page, limit, skip } = getPaginationParams(req);
    const total = await Quote.countDocuments({ user: req.user._id });
    const quotes = await Quote.find({ user: req.user._id })
      .populate("user", "name")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: quotes,
      pagination: getPaginationMeta(total, page, limit),
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

// Get a single quote by ID
export const getQuoteById = async (req, res, next) => {
  try {
    const quote = await Quote.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!quote)
      return res
        .status(404)
        .json({ success: false, message: "Quote not found" });
    res.json({ success: true, data: quote });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

// Create a new quote
export const createQuote = async (req, res, next) => {
  try {
    const newQuote = new Quote({ ...req.body, user: req.user._id });
    const saved = await newQuote.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    next(error);
  }
};

// Update an existing quote
export const updateQuote = async (req, res, next) => {
  try {
    const updated = await Quote.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated)
      return res
        .status(404)
        .json({ success: false, message: "Quote not found or unauthorized" });
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
    next(error);
  }
};

// Delete a quote
export const deleteQuote = async (req, res, next) => {
  try {
    const deleted = await Quote.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!deleted)
      return res
        .status(404)
        .json({ success: false, message: "Quote not found or unauthorized" });
    res.json({ success: true, message: "Quote deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};
