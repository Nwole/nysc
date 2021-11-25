import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const LoginHere = () => {
  return (
    <div className="login">
      {/* <div className="form-box"> */}
      <h2 className="youth-corps">NATIONAL YOUTH SERVICE CORPS</h2>
      <p className="service-humility">SERVICE AND HUMILITY</p>

      <div className="form-container">
        <div className="form-header">
          <h3>Existing User Login</h3>
        </div>

        <div className="form">
          <div className="form-control">
            <label htmlFor="emailaddress">
              <i className="fa fa-envelope" />
              Email Address:
            </label>
            <input type="textemail" name="email" />
          </div>
          <div className="form-control">
            <label htmlFor="password">
              <i className="fa fa-eye" />
              Password:
            </label>
            <input type="password" name="password" />
          </div>
        </div>
        <div className="btn-btn-resume">
          <button className="resume">Resume</button>
        </div>
        <Link className="forgot-password" to="/forget password">Forgot Password or Email?</Link>
      </div>
      <div className="nysc-system">
        <p>NYSC</p>
        <p>INTEGRATED</p>
        <p>SYSTEM</p>
      </div>
      
    </div>
  );
};

export default LoginHere;
