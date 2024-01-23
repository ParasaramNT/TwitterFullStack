import React, { useEffect, useState } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified"; 
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios"


const Post = ({ displayName, userName,  text, image, avatar, id }) => {

  const [like, setLike] = useState(false);

  const fetchLikeStatus = async ()=>{
    try{
      console.log(id);
      const response= await axios.get(`https://twitter-full-stack-exwv62if8-parasarams-projects.vercel.app/api/getAllUsersWhoLiked/${id}`, {
        headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      });
      console.log(response)
      setLike(response.data.userLiked);
    }
    catch(err){
      console.log(err);
    }
  }

  const handleClick = async ()=> {
    try{
      const response = await axios.post(`https://twitter-full-stack-exwv62if8-parasarams-projects.vercel.app/api/liketweet/${id}`,{}, {
        headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      });  
      setLike(response.data.newLikeState);
    }
    catch(err){
      console.log(err)
      setLike(!like);
    }
    
  }
  useEffect(() => {
    fetchLikeStatus();
  }, [id, like])
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar sx={{ width: 40, height: 40 }}>U</Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" /> <i> @{userName}</i>
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        {image && (
          <img
            src="https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif"
            alt="image"
          ></img>
        )}

        <div className="post__footer">
        <div className="inner__footer">
          <ChatBubbleOutlineIcon fontSize="small" className="inner__footer__item"/>
          <RepeatIcon fontSize="small" className="inner__footer__item"/>
          {like ? (
          <FavoriteIcon
            fontSize="small" 
            className="inner__footer__item"
            style={{ color: 'red' }} 
            onClick={handleClick} 
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="small" 
            className="inner__footer__item"
            onClick={handleClick} 
          />
        )}
          <BarChartIcon fontSize="small" className="inner__footer__item"/>
          <BookmarkBorderIcon fontSize="small" className="inner__footer__item"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
