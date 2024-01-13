const {
  postTweetController,
  deleteTweetController,
  getAllTweetsByUser,
} = require("../controllers/tweetController");
const { auth } = require("../middlewares/authMiddleware");

const express = require("express");
const router = express.Router();

router.post("/posttweet", auth, postTweetController);
router.post("/deletetweet:tweetid", auth, deleteTweetController);
router.get("/getalltweets", auth, getAllTweetsByUser);

module.exports = router;
