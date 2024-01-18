import React from "react";
import "./TweetBox.css";
import Avatar from "@mui/material/Avatar";
import Button from "../../Common/Button";
import ImageIcon from '@mui/icons-material/Image';

const TweetBox = ({handleSubmit, tweet, setTweet}) => {
  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__input">
          <Avatar sx={{ width: 70, height: 70 }}>H</Avatar>
          <div className="tweetBox__container">
            <textarea
              placeholder="What's happening"
              type="text"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
              autoFocus={true}
            ></textarea>
            <div className="tweetimage">
              <ImageIcon style={{ fontSize: '48px', color: '#50b7f5' }} className="imageicon"/>
              <Button size="small">Tweet</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;



