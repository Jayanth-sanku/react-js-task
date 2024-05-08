import React, { useState } from "react";
import "./Header.css";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="home">
      <Navbar />

      <div className="central-card">
        
        <div className="content">{/* */}</div>
        
        <div className="buttons">
          <button className="search-button">Search</button>
          <button className="new-ad-button">NewAd</button>
        </div>
      </div>

      
      {showPopup && (
        <div className="footer-banner">
          <div>
            <p>We Use Cookies</p>
            <p>
              This website uses cookies to give you a better user experience.{" "}
              <span className="learn-more">Learn more</span>
            </p>
          </div>
          <button className="ok-button" onClick={togglePopup}>
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
