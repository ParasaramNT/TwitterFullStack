import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import Post from "../../Components/FeedPage/FeedComps/Post";

const Profile = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/getalltweetsbyuser",
         {
          "Content-Type": "application/json",
          withCredentials: true,
        }
      );
      console.log(res.data.tweets);
      setUserPosts(res.data.tweets);
    } catch (err) {
      console.log("Error fetching user details:", err);
      if (err.response) {
        console.log("Server responded with:", err.response);
      }
    }
  };
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
    fetchUser();
    fetchPosts();
  }, []);

  return (
    <div className="profileDiv">
      <h2>Profile</h2>
      <div className="profile__post">
        {userDetails ? (
          <div>
            <p>displayName: {userDetails.displayname}</p>
            <p>Username: {userDetails.username}</p>
            <p>Email: {userDetails.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div>
        {userPosts ? (
          userPosts.map((item) => (
            <Post
              key={item._id}
              displayName={item.user.displayname}
              userName={item.user.username}
              text={item.tweet}
              id= {item._id}
            />
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
