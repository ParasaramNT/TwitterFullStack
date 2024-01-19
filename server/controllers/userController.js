const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const signup = async (req, res) => {
  try {
    const { username, displayname, email, password } = req.body;
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
      displayname,
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
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter both email and password",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User with email doesn't exist",
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    const options = {
      username: user.username,
      email: user.email,
      displayname: user.displayname,
      id: user._id,
    };
    console.log("JWT in controller:", process.env.JWT_SECRET);

    const token = jwt.sign(options, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    console.log("token in controller", token);

    res.cookie("testcookie", "testvalue", {
      expires: new Date(Date.now() + 86400000),
    }); // 24 hours from now

    return res
      .cookie("tokencookie", token, {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        path: "/",
        sameSite: "None",
      })
      .json({
        success: true,
        message: "User successfully logged in",
        token,
      });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Error logging in",
      error: err.message,
    });
  }
};

const logoff = async (req, res) => {
  try {
    const email = req.user.email;
    if (!email) {
      return res.status(400).json({
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

const userDetails = async (req, res) => {
  try {
    console.log(req.user);
    const userEmail = req.user.email;
    if (!userEmail) {
      return res.status(400).json({
        success: false,
        message: "user already logout out",
      });
    }

    const userDetails = await User.find({ email: userEmail });
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User data",
      userDetails,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

const getAllUsers = async (req, res)=> {
  try{
    const numberOfUsers = parseInt(req.query.n, 10);
    let users;
    if (isNaN(numberOfUsers) || numberOfUsers <= 0) {
      users = await User.find({});
    } else {
      users = await User.aggregate([
        { $sample: { size: numberOfUsers } }
      ]);
    }
    return res.status(200).json({
      success: true,
      message: 'Users retrieved successfully',
      users,
    });
  }
  catch(err){
    return res.status(500).json({
      success: false,
      message: 'Error retrieving users',
      error: err.message,
    });
  }
}

const followUnfollowUser = async (req, res) => {
  try{
    const userIdToFollowUnFollow = req.params.userid;
    const loggedUser = req.user.id;

    if(!loggedUser){
      return res.status(400).json({
        success: false,
        message: "user already logout out",
      });
    }
    const userToFollowUnFollow = await User.findById(userIdToFollowUnFollow);
    const currentUser = await User.findById(loggedUser);

    if (!userToFollowUnFollow || !currentUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isFollowing = currentUser.following.includes(userIdToFollowUnFollow);

    if (isFollowing) {
      currentUser.following.pull(userIdToFollowUnFollow);
      userToFollowUnFollow.followers.pull(loggedUser);
    } else {
      currentUser.following.push(userIdToFollowUnFollow);
      userToFollowUnFollow.followers.push(loggedUser);
    }

    await currentUser.save();
    await userToFollowUnFollow.save();

    res.status(200).json({
      success: true,
      isFollowing,
      message: isFollowing ? "User unfollowed successfully" : "User followed successfully",
    });
  }
  catch(err){
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
}

const checkIfUserIsFollowing = async (req, res) => {
  try {
    console.log("In check:", req.user.id);
    console.log("In check param:", req.params.userid);

    // Retrieve the logged-in user's data from the database
    const loggedUser = await User.findById(req.user.id).exec();
    const userIdToCheck = req.params.userid;  // Already a string

    if (!loggedUser) {
      return res.status(401).json({
        success: false,
        message: "User not logged in",
      });
    }

    // Convert ObjectId to string for comparison
    const isFollowing = loggedUser.following.map(id => id.toString()).includes(userIdToCheck);

    res.status(200).json({
      success: true,
      isFollowing,
    });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};


const updateProfile = async (req, res) => {
  try {
  } catch (err) {}
};

module.exports = { signup, login, logoff, updateProfile, userDetails, getAllUsers, followUnfollowUser, checkIfUserIsFollowing };
