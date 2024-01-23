import React, { useState } from "react";
import Button from "../../Components/Common/Button";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const postDetails = async () => {
    try {
      const res = await axios.post("https://twitter-full-stack-exwv62if8-parasarams-projects.vercel.app/api/signup", {
        email,
        password,
        username,
      });
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postDetails();
  };

  return (
    <div className="login__main">
       <div className="login__side__img">
        <img src="https://freelogopng.com/images/all_img/1657043345twitter-logo-png.png" alt="Twitter logo"></img>
      </div>
      <div className="login__form">
        <p><strong>Happening Now</strong></p>
        <h1>Join Today</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          ></input>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
          <Button size="large" type="submit">
            Sign-Up
          </Button>
          <Button size="large" onClick={()=>navigate("/signin")}>
            Sign-In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
