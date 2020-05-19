import React from "react";
import "./App.css";

import { NavBar } from "./components";
import { PersonalInfoForm } from "./components";

export const App = () => {
  return (
    <>
      <NavBar />
      <PersonalInfoForm />
    </>
  );
};
