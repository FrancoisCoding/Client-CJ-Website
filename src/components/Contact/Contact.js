import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div className="contact-top">
          <h1 className="contact-top-header times ">CONTACT US</h1>
          <img
            src="https://i.imgur.com/DaOjg6n.png"
            alt="Phone"
            className="contact-image"
          />
          <p className="contact-link">info@quadruplejcapital.com</p>
        </div>
        <form action="" className="contact-form">
          <div className="contact-form-submit">SUBMIT</div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
