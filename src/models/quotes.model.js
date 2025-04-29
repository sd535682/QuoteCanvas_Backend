import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: [true, "Quote is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
  },
  { timestamps: true }
);

export const Quote = mongoose.model("Quote", quoteSchema);