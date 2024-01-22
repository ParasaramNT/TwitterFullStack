const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const getToken = (req) => {
  // Check Authorization header
  const authHeader = req.header("Authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    console.log("Return from AutheHeader");
    return authHeader.split(" ")[1];
  }
  // Check cookie
  if (req.cookies.tokencookie) {
    console.log("Return from cookie");
    return req.cookies.tokencookie;
  }
  // Check request body
};

const auth = async (req, res, next) => {
  try {
    const token = getToken(req);
    console.log(token);

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
