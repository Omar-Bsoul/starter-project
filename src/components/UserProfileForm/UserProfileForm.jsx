import React from "react";
import "./styles.css";

import { Input } from "../shared";

export const UserProfileForm = () => {
  return (
    <div>
      <Input
        placeholder="text2"
        onChange={(value) => {
          console.log(value);
        }}
      ></Input>
      <Input placeholder="text2"></Input>
      <Input placeholder="text2"></Input>
    </div>
  );
};
