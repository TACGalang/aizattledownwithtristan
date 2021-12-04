import React from 'react';
import "./MobileNavBar.css";
import logo from "../Icons/hero-logo.svg";
import { HashLink } from "react-router-hash-link";

function MobileNavBar({ isHidden }) {
    return (
        <div className={isHidden ? "mobile nav bar base container-inactive" : "mobile nav bar base container"}>
            <HashLink smooth to="#home">
            <img src={logo} />
            </HashLink>
        </div>
    )
}

export default MobileNavBar
