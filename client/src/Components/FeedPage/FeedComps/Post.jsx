import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Post = ({ displayName, userName, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar sx={{ width: 40, height: 40 }}>U</Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Santosh Tentu{" "}
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" /> <i> @santosh_tpn</i>
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              This is a full stack clone of the Twitter, Which is really really
              hard
            </p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif"
          alt="image"
        ></img>
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <BarChartIcon fontSize="small" />
          <BookmarkBorderIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
