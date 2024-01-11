import React from "react";
import "./Button.css";

const Button = ({ size, children }) => {
  return <button className={`button--${size}`}>{children}</button>;
};

export default Button;
