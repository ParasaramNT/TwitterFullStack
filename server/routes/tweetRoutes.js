const {
  postTweetController,
  deleteTweetController,
  getAllTweetsByUser,
  likeTweetController,
  getAllUsersWhoLiked
} = require("../controllers/tweetController");
const { auth } = require("../middlewares/authMiddleware");

const express = require("express");
const router = express.Router();

router.post("/posttweet", auth, postTweetController);
router.post("/deletetweet:tweetid", auth, deleteTweetController);
router.get("/getalltweetsbyuser", auth, getAllTweetsByUser);
router.post("/liketweet/:tweetId", auth, likeTweetController);
router.get("/getAllUsersWhoLiked/:tweetId", auth, getAllUsersWhoLiked)

module.exports = router;
