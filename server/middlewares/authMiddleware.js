const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(400).json({
        success: false,
        message: "User not logged in",
        token,
      });
    }

    try {
      console.log("JWT Key:", process.env.JWT_SECRET);
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decode:", decode);
      req.user = decode;

      next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "Token is invalid",
        error: err.message,
      });
    }
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying token",
      error: err.message,
    });
  }
};

module.exports = { auth };
