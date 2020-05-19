import React from "react";
import "./styles.css";

export const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div className="progress">
      <span className="progress-indicator">
        PROGRESS ({currentStep}/{totalSteps})
      </span>
      <div className="progress-track">
        <div className="progress-track_fill" style={{ width: `${(100 * currentStep) / totalSteps}%` }}></div>
      </div>
    </div>
  );
};
