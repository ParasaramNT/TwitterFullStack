const {
  postReplyController,
  deleteReplyController,
  getAllReplysOfTweet,
} = require("../controllers/replyController");
const { auth } = require("../middlewares/authMiddleware");

const express = require("express");
const router = express.Router();

router.post("/postreply", auth, postReplyController);
router.post("/deletereply:replyid", auth, deleteReplyController);
router.get("/getReplys:tweetId", auth, getAllReplysOfTweet);

module.exports = router;
