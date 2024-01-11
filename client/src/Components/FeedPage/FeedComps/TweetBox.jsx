import React from "react";
import "./TweetBox.css";
import Avatar from "@mui/material/Avatar";
import Button from "../../Common/Button";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar sx={{ width: 70, height: 70 }}>H</Avatar>
          <input placeholder="What's happening" type="text"></input>
          <Button size="small">Tweet</Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
