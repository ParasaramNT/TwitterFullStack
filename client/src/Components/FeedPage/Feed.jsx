import React from "react";
import "./Feed.css";
import TweetBox from "./FeedComps/TweetBox";
import Post from "./FeedComps/Post";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
