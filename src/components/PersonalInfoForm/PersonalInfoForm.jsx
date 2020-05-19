import React from "react";
import "./styles.css";

import { ProgressBar, Button } from "../shared";
import { UserProfileForm } from "..";

export const PersonalInfoForm = () => {
  return (
    <div className="personal-info-form">
      <div className="personal-info-form_background"></div>
      <div className="personal-info-form_info">
        <h1 className="personal-info-form_title">SATISFACTION SURVEY</h1>
        <h2 className="personal-info-form_title">Help us to improve our service and customer satisfaction.</h2>

        <div className="personal-info-form_form">
          <div style={{ backgroundColor: "#f3f3f3", borderBottom: "1px solid #55777777" }}>
            <div className="personal-info-form_form_user-info-container">
              <ProgressBar currentStep="4" totalSteps="4" />
            </div>
          </div>

          <UserProfileForm />

          <div style={{ backgroundColor: "#f3f3f3", borderTop: "1px solid #55777777" }}>
            <div className="personal-info-form_form_user-info-container">
              <div className="personal-info-form_form_user-info-container_navigation">
                <Button disabled className="navigation-button">
                  {"<"} Backward
                </Button>
                <Button className="navigation-button">Forward {">"}</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
