import React from "react";
import "./MobileNavBar.css";
import logo from "../Icons/hero-logo.svg";
import { Link as LinkS } from "react-scroll";

function MobileNavBar({ isHidden }) {
  return (
    <div
      className={
        isHidden
          ? "mobile nav bar base container-inactive"
          : "mobile nav bar base container"
      }
    >
      <LinkS
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        to="home"
      >
        <img src={logo} />
      </LinkS>
    </div>
  );
}

export default MobileNavBar;
