import "./Button.css";

const Button = ({ size, children }) => {
  return (
    <div>
      <button className={`button--${size}`}>{children}</button>
    </div>
  );
};

export default Button;
