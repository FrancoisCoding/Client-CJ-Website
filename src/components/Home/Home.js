import React from "react";
import "./Home.css";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  let history = useHistory();
  return (
    <div>
      <Navbar />

      <section className="top-section">
        <img
          src="https://i.imgur.com/kYKfS7U.jpg"
          alt="Property"
          className="home-property"
        />
        <div className="top-section-info">
          <div className="top-section-info-text times">
            <p>LOOKING FOR CAPITAL TO PURCHASE</p>
            <p>YOUR NEXT INVESTMENT PROPERTY?</p>
          </div>
          <div className="contact-btn" onClick={() => history.push("/contact")}>
            CONTACT US
          </div>
        </div>
      </section>

      <main className="main-section">
        <h1 className="main-header times">WE ARE HERE TO SERVICE YOU</h1>
        <div className="icon-section">
          <div className="icon-info open-sans">
            <img
              src="https://i.imgur.com/50lUVDp.png"
              alt="Services"
              className="services-images"
            />
            <p>Interested in fix and flips, rentals or wholesales</p>
          </div>
          <div className="icon-info open-sans">
            <img
              src="https://i.imgur.com/8sSp7sK.png"
              alt="Services"
              className="services-images"
            />
            <p>
              Do you have a property (residential or commercial) that is
              non-owner occupied and under contract?
            </p>
          </div>
          <div className="icon-info open-sans">
            <img
              src="https://i.imgur.com/eYDWlfH.png"
              alt="Services"
              className="services-images"
            />
            <p>Looking to gain capital faster than the banks?</p>
          </div>
        </div>
      </main>

      <Footer />

      <div className="copyright">
        <p>Copyright © 2020 Quadruple J. Capital - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Home;
