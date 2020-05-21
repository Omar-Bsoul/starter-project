import React from "react";
import "./styles.css";

import { Input } from "../shared";

export const UserProfileForm = ({ countries }) => {
  const countriesOptions = (countries || []).map((country) => {
    return (
      <option key={country.id} value={country.id}>
        {country.displayName}
      </option>
    );
  });

  return (
    <div className="user-profile-form_container">
      <div className="row m-3">
        <Input placeholder="First Name" className="col-6 mr-2"></Input>
        <Input type="select" className="col-6 ml-2" initialValue="-1">
          <option value="-1">Select Country</option>
          {countriesOptions}
        </Input>
      </div>
      <div className="row m-3">
        <Input placeholder="Last Name" className="col-6 mr-2"></Input>
        <div className="col-6 ml-2 row">
          <Input placeholder="Counter" className="col-6"></Input>
          <span className="col-6 ml-3">Your incrementer</span>
        </div>
      </div>
      <div className="row m-3">
        <Input placeholder="Your Email" className="col-6 mr-2"></Input>
        <div className="col-6 ml-2 row">
          <Input placeholder="Age" className="col-4"></Input>
          <div className="col-4 row">
            <Input id="male" type="radio" name="gender" initialValue="male" className="large-radio"></Input>
            <label htmlFor="male">Male</label>
          </div>
          <div className="col-4 row">
            <Input id="female" type="radio" name="gender" initialValue="female" className="large-radio"></Input>
            <label htmlFor="female">Female</label>
          </div>
        </div>
      </div>
    </div>
  );
};
