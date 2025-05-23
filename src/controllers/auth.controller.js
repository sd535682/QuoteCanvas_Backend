import mongoose from "mongoose";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";

// Register Controller
export const register = async (req, res, next) => {
  const session = await mongoose.startSession(); // Await the session start
  session.startTransaction();

  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already in use",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });
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
    await session.commitTransaction();

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

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(", "),
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered",
      });
    }

    next(error);
  } finally {
    session.endSession();
  }
};

// Login Controller
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Logout Controller
export const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};
