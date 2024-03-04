import React from "react";

const Button = ({ onClick, label }) => {
  const buttonStyle = {
    backgroundColor: "var(--button-bg-color)",
    color: "var(--white-color)",
    border: "none",
    padding: "10px 21px 10px 17px",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  };
  return (
    <button type="button" style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
