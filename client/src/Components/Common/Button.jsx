import React from "react";
import "./Button.css";

const Button = ({ size, children, onClick }) => {
  return <button className={`button--${size}`} onClick={onClick}>{children}</button>;
};

export default Button;
