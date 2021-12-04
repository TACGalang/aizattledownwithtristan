import React from "react";
import headerBG from "../Images/hero-image.png";
import headerTitle from "../Icons/hero-logo.svg";
import "./Header.css";
import "../App.css";

function Header() {
  return (
    <div className="header-container" id="home">
      <img src={headerTitle} alt="Header Title" className="header-title" />
      <img
        src={headerBG}
        alt="Header Background"
        className="header-backgrounds"
      />
    </div>
  );
}

export default Header;
