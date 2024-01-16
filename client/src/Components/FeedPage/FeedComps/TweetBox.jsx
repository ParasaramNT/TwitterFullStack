import React from "react";
import "./TweetBox.css";
import Avatar from "@mui/material/Avatar";
import Button from "../../Common/Button";
import { useState } from "react";
import axios from "axios";

const TweetBox = () => {
  const [tweet, setTweet] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios.post(
        "http://localhost:8000/api/posttweet",
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
  };

  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__input">
          <Avatar sx={{ width: 70, height: 70 }}>H</Avatar>
          <input
            placeholder="What's happening"
            type="text"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          ></input>
          <Button size="small">Tweet</Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
