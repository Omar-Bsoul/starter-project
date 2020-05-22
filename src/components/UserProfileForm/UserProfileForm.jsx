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
        <Input placeholder="First Name" containerClasses="col-6" marginRight="16"></Input>
        <Input type="select" containerClasses="col-6" marginLeft="16" initialValue="-1">
          <option value="-1">Select Country</option>
          {countriesOptions}
        </Input>
      </div>

      <div className="row m-3">
        <Input placeholder="Last Name" containerClasses="col-6" marginRight="16"></Input>
        <Input placeholder="Counter" containerClasses="col-3" marginRight="16" marginLeft="16"></Input>
        <span className="col-3">Incrementor</span>
      </div>

      <div className="row m-3">
        <Input placeholder="Your Email" containerClasses="col-6" marginRight="16"></Input>
        <div className="col-6 row">
          <Input placeholder="Age" containerClasses="col-6" marginRight="16" marginLeft="16"></Input>
          <div className="col-3 row">
            <Input id="male" type="radio" name="gender" initialValue="male" className="large-radio" containerClasses="col-6"></Input>
            <label htmlFor="male" className="col-6">
              Male
            </label>
          </div>
          <div className="col-3 row">
            <Input id="female" type="radio" name="gender" initialValue="female" className="large-radio" containerClasses="col-6"></Input>
            <label htmlFor="female" className="col-6">
              Female
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
