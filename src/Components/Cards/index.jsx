import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Cards = () => {
  return (
    <div className="home_container">
      <div className="section-details">
        <div className="no-active-registration">
          <p>no active registration</p>
        </div>
        <div className="login_section">
          {/* <button className="btn-btn">Login Here</button> */}
          <Link className="btn-btn" to="/ login"> Login Here</Link>
        </div>
      </div>

      <div className="remobilize-section">
        <p className="application">
          New: Online Application for Remobilization!!
        </p>
        <Link className="apply" to="/remobilize">
          Click here to apply for Remobilization
        </Link>
      </div>

      <div className="verification-section">
        <div className="choose-verification">
          <div className="verify-certificate">
            <Link className="verify-button" to="/verify">
              Verify Certificate
            </Link>
          </div>

          <div className="verify-certificate">
            <Link className="verify-button" to="/payment">
              Payment Status
            </Link>
          </div>

          <div className="verify-certificate">
            <Link className="verify-button" to="/main site">
              Visit the main site
            </Link>
          </div>
        </div>
      </div>

      <div className="guideline">
        <h3 className="guideline-heading">Guidelines</h3>
        <hr />
      </div>

      <div className="requirements">
        <div className="foreign-corps-member-requiremnt">
          <div className="requirement-details">
            <p className="requirment-heading">Foreign P.C.M Requirments</p>
          </div>
          <div className="requirement-details">
            <p className="requirment-heading">Guidelines on payment</p>
          </div>
          <div className="requirement-details">
            <p className="requirment-heading">Change of Date of Birth</p>
          </div>
        </div>
      </div>

      <div className="important-info">
        <p className="info-heading">Inportant Information</p>
        <hr />
      </div>

      <div className="check-senate-list">
        <div className="senate-content">
          <div className="senate-list-box">
            <Link className="senate-list-link" to="/ check senate list">
              Check senate list or its equivalents
            </Link>
          </div>
          <div className="senate-list-box">
            <Link className="senate-list-link" to="/ view graduation list">
              View Graduation List
            </Link>
          </div>
          <div className="senate-list-box">
            <Link className="senate-list-link" to="/ accredited institution">
              Accredited Institution/Programms
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
