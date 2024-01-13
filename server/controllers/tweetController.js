const Tweet = require("../models/tweetModel");
const Reply = require("../models/replyTweetModel");
const User = require("../models/userModel");

const postTweetController = async (req, res) => {
  try {
    const userEmail = req.user.email;
    const userId = req.user.id;
    const tweet = req.body.tweet;
    if (!userEmail) {
      return res.status(400).json({
        success: false,
        message: "User not logged in",
      });
    }
    if (!tweetContent || tweet.length == 0) {
      return res.status(400).json({
        success: false,
        message: "Cannot post empty tweet",
      });
    }
    try {
      const newTweet = await Tweet.create({ tweet, _id: userId });
      return res.status(200).json({
        success: true,
        message: "Tweet Posted Successfully",
        tweet,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: "Error posting tweet",
        error: err.message,
      });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

const deleteTweetController = async (req, res) => {
  try {
    const tweetId = req.body.tweetId || req.params.tweetId;
    const userId = req.user.id;
    const tweet = await Tweet.findOne({ _id: tweetId });
    if (!tweet) {
      return res.status(400).json({
        success: false,
        message: "Tweet doesnt exist/ already deleted",
      });
    }

    if (tweet.user.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "User not authorized to delete this tweet",
      });
    }
    await Tweet.findByIdAndDelete(tweetId);
    return res.status(200).json({
      success: true,
      message: "Tweet deleted successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error deleting tweet",
      error: err.message,
    });
  }
};

const getAllTweetsByUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const Tweets = await Tweet.find({ user: userId });
    res.status(200).json({
      success: true,
      tweets: Tweets,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error retrieving tweets",
      error: err.message,
    });
  }
};

module.exports = {
  postTweetController,
  deleteTweetController,
  getAllTweetsByUser,
};
