const {
  postTweetController,
  deleteTweetController,
  getAllTweetsByUser,
  likeTweetController,
  getAllUsersWhoLiked,
  getAllTweetsForFeed
} = require("../controllers/tweetController");
const { auth } = require("../middlewares/authMiddleware");

const express = require("express");
const router = express.Router();

router.post("/posttweet", auth, postTweetController);
router.post("/deletetweet:tweetid", auth, deleteTweetController);
router.get("/getalltweetsbyuser", auth, getAllTweetsByUser);
router.post("/liketweet/:tweetId", auth, likeTweetController);
router.get("/getAllUsersWhoLiked/:tweetId", auth, getAllUsersWhoLiked);
router.get("/getAllTweetsForFeed", auth, getAllTweetsForFeed);

module.exports = router;
