import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-heading-container">
        <h2 className="contact-heading">CONTACT INFORMATION</h2>
      </div>

     <div className="contact-section">
       <div className="contact-details">
        <h3 className="contact-info">Would like to hear from you</h3>
        <hr />

        <div className="head-office">
          <h2 className="para">NYSC NATIONAL HEAD OFFICE</h2>
        </div>
        <p>Plot 416, Tigris Cresent Off Aguiyi Ironsi Street, Maitama</p>
        <p>PMB 138, Garki, Abuja</p>
        <p>Tell: +234-8147869429, +234-9038304460, +234-8092142661. <Link className="help" to="help lines">Click for more Helplines</Link></p>
        <p>Email:<Link>nyscsupport@nysc.ng</Link></p>

        <div className="head-office">
          <h2 className="para">SIDMACH TECHNOLOGIES NIGERIA LTD. HEAD OFFICE</h2>
        </div>
        <p> pLOT 15, bLOCK J, Otunba Jobi Fele Way, </p>
        <p>Behind M.K.O Gradens, Central Business Destrict,</p>
        <p>Alausa, Ikeja, Lagos, Nigreia</p>
        <p>Tell: +234-9087197603, +234-9087197603</p>
        <p>Email:<Link>nyscsupport@sidmach.com</Link></p>
     </div>
     </div>
     <div className="footer-section">
        <div className="footer-details">
          <div className="footer">
            <h2>Power by SIDMACH</h2>
          </div>

          <div className="footer-footer">
              <p className="footer-para">Copyright @ 2021 National Youths Service Corps. All rights reserved. <Link>Privacy Policy</Link></p>
          </div>
        </div>
     </div>
    </div>
  );
};

export default ContactUs;
