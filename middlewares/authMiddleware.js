const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();


const auth = async (req, res, next) => {
  try {
    console.log("Cookies in middleware", req.cookies);
    console.log(req.cookies.tokencookie);
    const token = req.cookies.tokencookie;
    console.log("token in middleware", token);

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
