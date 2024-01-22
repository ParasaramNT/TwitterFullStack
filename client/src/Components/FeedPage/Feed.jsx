import React, { useCallback, useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./FeedComps/TweetBox";
import Post from "./FeedComps/Post";
import axios from "axios";
import { useNavigate } from "react-router-dom"

const Feed = () => {
  const [tweet, setTweet] = useState("");
  const [allTweets, setAllTweets] = useState([]);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState([]);

  const navigate = useNavigate();


  const handleSelectImage = useCallback(()=>{
    const input = document.createElement('input');
    input.setAttribute('type', 'file')
    input.setAttribute('accept', "image/*")
    input.click();
  }, [])

  const fetchTweets = async () => {
    try {
      const response = await axios.get('https://twitter-backend-gbfe.onrender.com/api/getAllTweetsForFeed', {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });
      setAllTweets(response.data.tweets);
    } catch (err) {
      console.error(err);
      navigate("/signin");
      setError("Failed to load tweets. Please try again later.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios.post(
        "https://twitter-backend-gbfe.onrender.com/api/posttweet",
        {
          tweet,
        },
        {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      );
    } catch (err) {
      console.log(err);
    }
    setTweet("");
    fetchTweets();
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get("https://twitter-backend-gbfe.onrender.com/api/userdetails", {
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
    fetchTweets();
  }, []);

  useEffect(() => {
    console.log("Tweets (updated)", allTweets);
    fetchUser();
  }, [allTweets, tweet]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="feed">
    <TweetBox handleSubmit={handleSubmit} handleSelectImage={handleSelectImage} tweet={tweet} setTweet={setTweet} className="tweetbox"/>
    <div>
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
