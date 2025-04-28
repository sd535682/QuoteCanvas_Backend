const errorMiddleware = (err, req, res, next) => {
  // Log error for debugging purposes
  console.error(err);

  // MongoDB duplicate key error: error code 11000
  if (err.code && err.code === 11000) {
    const duplicateKey = Object.keys(err.keyValue)[0];
    const duplicateValue = err.keyValue[duplicateKey];
    return res.status(409).json({
      success: false,
      error: `Duplicate field value: ${duplicateValue}. Please use another value for ${duplicateKey}.`,
    });
  }

  // Mongoose validation errors
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res.status(400).json({
      success: false,
      error: messages.join(", "),
    });
  }

  // Cast Error (e.g., wrong ObjectId format)
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      error: `Resource not found. Invalid: ${err.path}`,
    });
  }

  // Other general errors
  res.status(500).json({
    success: false,
    error: "Server Error",
  });
};

export default errorMiddleware;
