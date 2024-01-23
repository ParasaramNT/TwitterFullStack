const Tweet = require("../models/tweetModel");
const Reply = require("../models/replyTweetModel");
const User = require("../models/userModel");

const postReplyController = async (req, res) => {
  try {
    const tweet = req.params.tweetId;
    const reply = req.body.reply;
    const user = req.user.id;

    const newReply = await Reply.create({ tweet, reply, user });

    res.status(201).json({
      message: "Reply posted successfully",
      reply: newReply,
    });
  } catch (err) {
    res.status(500).json({
      message: "An error occurred",
      error: err.message,
    });
  }
};

const deleteReplyController = async (req, res) => {
  try {
    const reply = req.params.replyId;
    const userId = req.user.id;
    const Reply = await Reply.findOne({ _id: reply });
    if (!Reply) {
      return res.status(400).json({
        success: false,
        message: "Reply doesnt exist/ already deleted",
      });
    }
    if (Reply.user.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "User not authorized to delete this reply",
      });
    }

    await Reply.findByIdAndDelete(reply);
    return res.status(200).json({
      success: true,
      message: "Reply deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error deleting reply",
      error: err.message,
    });
  }
};

const getAllReplysOfTweet = async (req, res) => {
  try {
    const tweet = req.params.tweetId;
    const Replys = await Reply.find({ tweet });
    res.status(200).json({
      success: true,
      replys: Replys,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error retrieving replys",
      error: err.message,
    });
  }
};

module.exports = {
  postReplyController,
  deleteReplyController,
  getAllReplysOfTweet,
};
