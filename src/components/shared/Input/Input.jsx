import React, { useState } from "react";
import "./styles.css";

export const Input = ({ type, initialValue, onChange, className, children, ...otherProps }) => {
  const [value, setValue] = useState(initialValue || "");

  function _onChange(event) {
    setValue(event.target.value);

    onChange && onChange(event.target.value);
  }

  if (type === "select") {
    return (
      <select className={`input ${className || ""}`} value={value} onChange={_onChange}>
        {children}
      </select>
    );
  }

  return <input className={`input ${className || ""}`} type={type} value={value} onChange={_onChange} {...otherProps}></input>;
};
