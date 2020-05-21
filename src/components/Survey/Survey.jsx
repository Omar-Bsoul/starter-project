import React, { useState, useEffect } from "react";
import "./styles.css";

import { countriesClient } from "../../api";
import { ProgressBar, Button } from "../shared";
import { UserProfileForm } from "..";

export const Survey = ({ surveyId }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // componentDidMount...
    countriesClient.getAll().then((apiCountries) => {
      setCountries(apiCountries);
    });

    return () => {
      // componentWillUnmount...
    };
  }, []);

  return (
    <div className="survey">
      <div className="survey_background"></div>
      <div className="survey_info">
        <h1 className="survey_title">SATISFACTION SURVEY</h1>
        <h2 className="survey_title">Help us to improve our service and customer satisfaction.</h2>

        <div className="survey_form">
          <div style={{ backgroundColor: "#f3f3f3", borderBottom: "1px solid #55777777" }}>
            <div className="survey_form_user-info-container">
              <ProgressBar currentStep="1" totalSteps="4" />
            </div>
          </div>

          <UserProfileForm countries={countries} />

          <div style={{ backgroundColor: "#f3f3f3", borderTop: "1px solid #55777777" }}>
            <div className="survey_form_user-info-container">
              <div className="survey_form_user-info-container_navigation">
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
