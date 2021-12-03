import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./NarBar.css";

export const NavBar = ({ isNavBarActive, callHandleClick }) => {

  return (
    <>
      <nav className={isNavBarActive ? "navbar-active" : "navbar"}>
        <ul className="nav-menu-list">
          <li className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <HashLink smooth to="#our-story" className="nav-links">
              Our Story
            </HashLink>
          </li>
          <li className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <HashLink smooth to="#when-and-where" className="nav-links">
              When & Where
            </HashLink>
          </li>
          <li className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <HashLink smooth to="#attires-and-gift" className="nav-links">
              Attires & Gift
            </HashLink>
          </li>
          <li smooth className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <HashLink smooth to="#faq" className="nav-links">
              FAQ
            </HashLink>
          </li>
          <li className="nav-menu-item">
            <Link smooth to="/rsvp" className="nav-links">
              RSVP
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
