import React from "react";
import "./Footer.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 className="title">Flavor Haven</h2>
          <p>
          Welcome to Flavor Haven, your go-to platform for delightful food deliveries, crafted with care using React. Brought to you by Subhasish. Savor every bite and order now to treat yourself!
          </p>
          <div className="footer-social-icons">
           
            <a
              className="github-icon"
              href="https://github.com/sruthipanjala"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              className="linkedin-icon"
              href="https://www.linkedin.com/in/panjala-sruthi-0aa2b0234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Details</a>
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>Reach Out to Us.</h2>
          <ul>
            <li>
              <a href="mailto:sruthipanjala@gmail.com">contact@foodio.com</a>
            </li>
          
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 ©Flavor Haven - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
