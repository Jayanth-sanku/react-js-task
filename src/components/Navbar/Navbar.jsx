import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMessage,
  faPlus,
  faUser,
  faChevronDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />

      <div className="nav-middle">
        <ul className="navbar-menu">
          <li>
            <FontAwesomeIcon icon={faBell} />{" "}
            <span className="icon-text-gap">Notifications</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faMessage} />{" "}
            <span className="icon-text-gap">Messages</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faPlus} />{" "}
            <span className="icon-text-gap">New Ad</span>
          </li>
        </ul>
      </div>

      <div className="navbar-right hamburger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {showMenu && (
  <div className="menu-card">
    <ul className="menu-items">
      <li>
        <FontAwesomeIcon icon={faBell} /> Notifications
      </li>
      <li>
        <FontAwesomeIcon icon={faMessage} /> Messages
      </li>
      <li>
        <FontAwesomeIcon icon={faPlus} /> New Ad
      </li>
      <li>My Account</li>
      <li>Login</li> {/**/}
      <li>Create Account</li> {/* */}
    </ul>
  </div>
)}


      <div className="navbar-right" onClick={toggleOptions}>
        <FontAwesomeIcon icon={faUser} />
        <p>My Account</p>
        <FontAwesomeIcon icon={faChevronDown} />
        {showOptions && (
          <div className="options-dropdown">
            <p>Login</p>
            <p>New Account</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
