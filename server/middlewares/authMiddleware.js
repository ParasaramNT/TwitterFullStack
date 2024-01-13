const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const auth = async (req, res) => {
  try {
    const token =
      req.cookies.token || req.header("Authorization").replace("Bearer", " ");

    if (!token) {
      res.status(400).json({
        success: false,
        message: "User not logged in",
      });
    }

    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: "token is invalid",
      });
    }
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while verifying token",
    });
  }
};

module.exports = { auth };
