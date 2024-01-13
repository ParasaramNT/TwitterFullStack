const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });

    if (existingUser) {
      let message = "User already exists";

      if (existingUser.username === username) {
        message = "Username already exists";
      } else if (existingUser.email === email) {
        message = "E-mail already exists";
      }

      return res.status(400).json({
        success: false,
        message: message,
      });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      success: true,
      message: "User Created",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Error creating User",
      error: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      res.status(400).json({
        success: false,
        message: "Please enter both email and password",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(200).json({
        success: false,
        message: "User with email doesn't exists",
      });
    }

    const options = {
      email: user.email,
      id: user._id,
    };
    let token;
    if (await bcrypt.compare(password, user.password)) {
      token = jwt.sign(options, process.env.JWT_KEY, { expiresIn: "2h" });
    }

    res
      .cookie("tokencookie", token, {
        expires: "new Date(Date.now() + 3*24*60*60*1000",
        httpOnly: true,
      })
      .json({
        success: true,
        message: "User successfully logged in",
      });
  } catch (err) {
    return res.status(400).json({
      succes: false,
      message: "Error logging in",
    });
  }
};

const logoff = async (req, res) => {
  try {
    const email = req.user.email;
    if (!email) {
      res.status(400).json({
        success: false,
        message: "user already logout out",
      });
    }
    req.user = {};
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "user logged off",
    });
  } catch (err) {
    return res.status(400).json({
      succes: false,
      message: "Error logging off",
    });
  }
};

const updateProfile = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = { signup, login, logoff, updateProfile };
