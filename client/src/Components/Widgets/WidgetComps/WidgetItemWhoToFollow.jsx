import React, { useState , useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "../../Common/Button";
import "./WidgetItemWhoToFollow.css"
import axios from "axios";

const WidgetItemWhoToFollow = () => {
  const [whoToFollow, setWhoToFollow] = useState([]);

  const fetchWhoToFollow = async ()=>{
      const res= await axios.get("http://localhost:8000/api/getallusers?n=3", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      })
      console.log("Who to follow Users", res.data.users)
      setWhoToFollow(res.data.users);
  }
  useEffect(()=>{
    fetchWhoToFollow()
  }, [])
  return (
    <div >
      {whoToFollow.map((item) => (
        <div className="widgetItemWhoToFollow" key={item.username}>
          <div className="avatar-and-details">
          <div className="whoavatar">
            <Avatar />
          </div>
          <div>
            <p>{item.displayname}</p>
            <i>@{item.username}</i>
          </div>
        </div>
            <Button size="tiny">Follow</Button>
      </div>
  ))}   
  </div>
  );
};

export default WidgetItemWhoToFollow;
