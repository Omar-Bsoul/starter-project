import React, { useState } from "react";
import "./styles.css";

export const Input = ({ type, initialValue, placeholder, onChange }) => {
  const [value, setValue] = useState(initialValue || "");

  function _onChange(event) {
    setValue(event.target.value);

    onChange && onChange(event.target.value);
  }

  return <input className="input" type={type} value={value} placeholder={placeholder} onChange={_onChange}></input>;
};
