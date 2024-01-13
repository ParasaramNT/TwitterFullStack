const {
  signup,
  login,
  logoff,
  updateProfile,
} = require("../controllers/userController");

const { auth } = require("../middlewares/authMiddleware");

const express = require("express");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("logoff", auth, logoff);
router.post("/uppdateprofile:userId", updateProfile);

module.exports = router;
