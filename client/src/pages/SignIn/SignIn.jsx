import React, { useState } from "react";
import Button from "../../Components/Common/Button";
import "./Signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      console.log(res);
      if (res.data.success && res.data.token) {
        // Set the cookie with the received token
        Cookies.set("tokencookie", res.data.token, {
          expires: 1,
          secure: true,
          sameSite: "Strict",
        }); // Expires in 1 day
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div></div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <Button size="large" type="submit">
            Log In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
