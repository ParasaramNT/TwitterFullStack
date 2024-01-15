import React, { useState } from "react";
import Button from "../../Components/Common/Button";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const postDetails = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/signup", {
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
    <div>
      <div>
        <h1>Happening now</h1>
        <h3>Join Today</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Button size="large" type="submit">
            Sign-Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
