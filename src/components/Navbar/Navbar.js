import React, { useState } from "react";
import "./Navbar.css";
import { slide as Menu } from "react-burger-menu";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  if (isOpen) {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  } else {
    document.getElementsByTagName("body")[0].style.overflowY = "visible";
  }
  return (
    <div className="navbar" style={{ overflow: "hidden !important" }}>
      <div className="menu">
        <Menu
          customBurgerIcon={<img src="https://i.imgur.com/M1SyJcd.png" />}
          width={"100%"}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
        >
          <Link to="/" id="home" className="menu-item-home menu-item">
            HOME
          </Link>
          <Link to="/about" id="about" className="menu-item">
            ABOUT US
          </Link>
          <Link to="/contact" id="contact" className=" menu-item">
            CONTACT US
          </Link>
          <Link to="/faqs" id="faqs" className="menu-item">
            FAQS
          </Link>
        </Menu>
      </div>
      <div className="logo-container">
        <img
          src="https://i.imgur.com/EjSBPco.png"
          alt="Quadruple Logo"
          className="logo-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
