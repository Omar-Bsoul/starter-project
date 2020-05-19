import React from "react";
import "./styles.css";

export const Button = ({ onClick, disabled, className, children }) => {
  return (
    <button onClick={onClick} className={`button ${className}`} disabled={disabled}>
      {children}
    </button>
  );
};
