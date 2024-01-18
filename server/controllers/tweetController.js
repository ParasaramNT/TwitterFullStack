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
    if (!tweet || tweet.length == 0) {
      return res.status(400).json({
        success: false,
        message: "Cannot post empty tweet",
      });
    }
    try {
      const newTweet = await Tweet.create({ tweet, user: userId });
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
    const Tweets = await Tweet.find({ user: userId }).populate("user");
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

const likeTweetController = async (req, res)=> {
  try{
    const useremail = req.user.email;
    const tweetId= req.params.tweetId;
    const userId = req.user.id;
    console.log(req.params.tweetId);
    console.log(userId)
    if(!useremail){
      return res.status(400).json({
        success: false,
        message: "User not logged in",
      })
    }

    const tweet = await Tweet.findOne({_id: tweetId})
    const index = tweet.likes.indexOf(userId);
    if(index != -1){
      tweet.likes.splice(index, 1);
      await tweet.save();
      return res.json({
        success: true,
        message: "Tweet unliked successfully",
      });
    }
    else {
      tweet.likes.push(userId);
      await tweet.save();
      return res.json({
        success: true,
        message: "Tweet liked successfully",
      });
    }
  }
  catch(err){
    console.log(err)
    return res.status(400).json({
      success: false,
      message: "Error liking post",
      error: err.message
    })
  }
}

const getAllUsersWhoLiked = async (req, res)=>{
  try{
    const tweetId= req.params.tweetId;
    const userId = req.user.id;
    const tweet = await Tweet.findOne({_id: tweetId}).populate("likes");
    if (!tweet) {
      return res.status(404).json({ success: false, message: "Tweet not found" });
    }
    const userLiked = tweet.likes.some(likeUser => likeUser._id.toString() === userId);
    // Get the list of users who liked the tweet
    const tweetLikes = tweet.likes.map(user => ({ id: user._id, username: user.username }));

    res.json({
        success: true,
        userLiked: userLiked,
        likes: tweetLikes
    });
}
    catch(err){
      console.log(err);
    }
}

const getAllTweetsForFeed = async (req, res) => {
  try{
    const tweets = await Tweet.aggregate([
      { $sample: { size: await Tweet.countDocuments() } },
      {
        $lookup: {
          from: "users", 
          localField: "user", 
          foreignField: "_id", 
          as: "userDetails" 
        }
      },
      {
        $unwind: "$userDetails" 
      }
    ]).exec();

    res.status(200.0).json({
      success: true,
      tweets: tweets,
    })
  }
  catch(err){
    res.status(500).json({
      success: false,
      message: "Error retrieving tweets",
      error: err.message,
    });
  }
}


module.exports = {
  postTweetController,
  deleteTweetController,
  getAllTweetsByUser,
  likeTweetController,
  getAllUsersWhoLiked,
  getAllTweetsForFeed
};
