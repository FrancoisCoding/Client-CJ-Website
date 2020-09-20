import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="https://i.imgur.com/2JrXqol.png"
        alt="Quadruple Logo"
        className="logo-black"
      />
      <div className="footer-links">
        <Link to="/about" className="footer-about-link link">
          ABOUT US
        </Link>
        <Link to="/contact" className="footer-contact-link link">
          CONTACT US
        </Link>
        <Link to="/faqs" className="footer-faqs-link link">
          FAQS
        </Link>
      </div>
      <div className="call">
        <div className="call-btn">CALL ME NOW</div>
        <h1>(877) 799-7575</h1>
      </div>
    </footer>
  );
};

export default Footer;
