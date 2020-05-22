import React, { useState } from "react";
import "./styles.css";

export const Input = ({
  type,
  initialValue,
  onChange,
  className,
  children,
  containerClasses,
  marginLeft = 0,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  ...otherProps
}) => {
  const [value, setValue] = useState(initialValue || "");

  function _onChange(event) {
    setValue(event.target.value);

    onChange && onChange(event.target.value);
  }

  const horMargin = +marginLeft + +marginRight;
  const inlineStyles = {
    width: `calc(100% - ${horMargin}px)`,
    marginLeft: marginLeft + "px",
    marginTop: marginTop + "px",
    marginRight: marginRight + "px",
    marginBottom: marginBottom + "px",
  };

  const commonProps = {
    className: `input ${className || ""}`,
    style: inlineStyles,
    value: value,
    onChange: _onChange,
  };

  if (type === "select") {
    return (
      <div className={containerClasses}>
        <select {...commonProps}>{children}</select>
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      <input {...commonProps} type={type} {...otherProps}></input>
    </div>
  );
};
