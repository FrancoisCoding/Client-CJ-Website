import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    entity: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "quadruplejcapital",
        "#contactform",
        "user_EOL2yavJMcxMWOciZYb0X"
      )
      .then(
        (result) => {
          setFormState({
            first_name: "",
            last_name: "",
            entity: "",
            phone: "",
            email: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  console.log(formState);
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
        {/* <form className="contact-form" onSubmit={sendEmail} id="contactform"> */}
        <form className="contact-form">
          <div className="contact-form-top">
            <input
              type="text"
              name="first_name"
              value={formState.first_name}
              placeholder="FIRST NAME*"
              className="contact-input open-sans"
              onChange={handleChange}
            />
            <input
              type="text"
              name="last_name"
              value={formState.last_name}
              placeholder="LAST NAME*"
              className="contact-input open-sans"
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-middle">
            <input
              type="text"
              name="entity"
              value={formState.entity}
              placeholder="NAME OF ENTITY (REQUIRED OF YOU HAVE ONE)"
              className="contact-input-long open-sans"
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-bottom">
            <input
              type="text"
              name="phone"
              value={formState.phone}
              placeholder="PRIMARY PHONE NUMBER*"
              className="contact-input open-sans"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              value={formState.email}
              placeholder="EMAIL ADDRESS*"
              className="contact-input open-sans"
              onChange={handleChange}
            />
          </div>
          <div className="contact-form-submit open-sans">SUBMIT</div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
