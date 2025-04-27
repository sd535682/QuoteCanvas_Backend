import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

export const register = async (req, res, next) => {
  const session = await mongoose.startSession(); // Await the session start
  session.startTransaction();

  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create(
      [
        {
          name,
          email,
          password: hashedPassword,
        },
      ],
      { session }
    );
    const token = jwt.sign({ userId: newUser[0]._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });
    session.commitTransaction();
    session.endSession();

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        token,
        user: newUser[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const login = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
  });
};

export const logout = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "User logged out successfully",
  });
};
