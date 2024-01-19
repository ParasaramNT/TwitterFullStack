import React, { useState , useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "../../Common/Button";
import "./WidgetItemWhoToFollow.css"
import axios from "axios";

const WidgetItemWhoToFollow = () => {
  const [whoToFollow, setWhoToFollow] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState();
  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/userdetails", {
        "Content-Type": "application/json",
        withCredentials: true,
      });
      console.log("LoggedIn Details", res.data.userDetails[0]._id);
      setLoggedInUserId(res.data.userDetails[0]._id);
    } catch (err) {
      console.log("Error fetching user details:", err);
      if (err.response) {
        console.log("Server responded with:", err.response);
      }
    }
  };

  const fetchWhoToFollow = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/getallusers?n=3", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      });
      const users = res.data.users;

      // Ideally, modify your backend to include follow status in this API response
      for (const user of users) {
        const followRes = await axios.get(`http://localhost:8000/api/getifuserisfollowing/${user._id}`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true
        });
        user.isFollowing = followRes.data.isFollowing;
      }

      setWhoToFollow(users);
    } catch (err) {
      console.error("Error fetching who to follow users:", err);
    }
  };


  const handleFollow = async (userId) => {
    try {
      const res = await axios.post(`http://localhost:8000/api/followunfollowuser/${userId}`, {}, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
  
      // Check if the request was successful
      if (res.data.success) {
        // Update the whoToFollow state to reflect the new follow/unfollow status
        setWhoToFollow(currentUsers => 
          currentUsers.map(user => {
            if (user._id === userId) {
              // Toggle the isFollowing status for the user
              return { ...user, isFollowing: !user.isFollowing };
            }
            return user;
          })
        );
      }
  
      console.log(res.data.message);
    } catch (err) {
      console.error("Error in follow/unfollow action:", err);
    }
  };
  

  useEffect(()=>{
    fetchWhoToFollow(),
    fetchUser()
  }, [])
  return (
   <div>
      {whoToFollow.map((item) => (
        <div className="widgetItemWhoToFollow" key={item.username}>
          {/* ... user details ... */}
          <div className="avatar-and-details">
          <div className="whoavatar">
            <Avatar />
          </div>
          <div>
            <p>{item.displayname}</p>
            <i>@{item.username}</i>
          </div>
        </div>
          <Button size="tiny" onClick={() => handleFollow(item._id)}>
            {item.isFollowing ? "Unfollow" : "Follow"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default WidgetItemWhoToFollow;
