import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./FeedComps/TweetBox";
import Post from "./FeedComps/Post";
import axios from "axios";

const Feed = () => {
  const [allTweets, setAllTweets] = useState([]);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState([]);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/userdetails", {
        "Content-Type": "application/json",
        withCredentials: true,
      });
      console.log(res.data.userDetails);
      setUserDetails(res.data.userDetails[0]);
    } catch (err) {
      console.log("Error fetching user details:", err);
      if (err.response) {
        console.log("Server responded with:", err.response);
      }
    }
  };

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getAllTweetsForFeed', {
          headers: {
            "Content-Type": "application/json"
          },
          withCredentials: true,
        });
        setAllTweets(response.data.tweets);
      } catch (err) {
        console.error(err);
        setError("Failed to load tweets. Please try again later.");
      }
    };

    fetchTweets();
  }, []);

  useEffect(() => {
    console.log("Tweets (updated)", allTweets);
    fetchUser();
  }, [allTweets]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="feed">
    <TweetBox/>
    <div >
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {allTweets.map((item) => (
        <Post
          key={item._id}
          displayName={item.userDetails.displayname}
          userName={item.userDetails.username}
          text={item.tweet}
          id={item._id}
        />
      ))}
    </div>
    </div>
  );
};

export default Feed;
