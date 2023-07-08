import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footerBody">
        <div className="footerArea">
          <div className="footer__logoSection">
            <img src="/Rectangle 3.jpg" alt="" />
            <div className="footer__socialsLogo">
              <img src="/faceBookLogo.svg" alt="FaceBook" />
              <img src="/twitterLogo.svg" alt="Twitter" />
              <img src="/linkedinLogo.svg" alt="LinkedIn" />
              <img src="/instagramLogo.svg" alt="Instagram" />
            </div>
          </div>

          <div className="footer__pagesSection">
            <h4>Pages</h4>
            <div className="footer__pages">
              <ul>
                <li>About Us</li>
                <li onClick={() => navigate("/mentor")}>Mentors</li>
                <li>Sessions</li>
                <li>Sign up</li>
              </ul>
            </div>
          </div>

          <div className="footer__contactSection">
            <h4>Contact</h4>
            <div className="footer__contacts-Address">
              <p>123 Main Street</p>
              <p>City, State 12345</p>
            </div>
            <div className="footer__contact-Mail">
              <a href="mailto:contact@mentorhub.com">contact@mentorhub.com</a>
            </div>
            <div className="footer__contact-Number">(123) 456 - 7890</div>
          </div>
        </div>
        <div className="footer__rightsSection">
          <p>© 2023 Mentor Hub. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
