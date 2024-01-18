const {
  signup,
  login,
  logoff,
  userDetails,
  updateProfile,
  getAllUsers
} = require("../controllers/userController");

const { auth } = require("../middlewares/authMiddleware");

const express = require("express");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logoff", auth, logoff);
router.get("/userdetails", auth, userDetails);
router.post("/uppdateprofile:userId", updateProfile);
router.get("/getallusers",auth, getAllUsers);

module.exports = router;
