import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "./NarBar.css";

export const NavBar = ({ isNavBarActive, callHandleClick }) => {

  return (
    <>
      <nav className={isNavBarActive ? "navbar-active" : "navbar"}>
        <ul className="nav-menu-list">
          <li className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <NavHashLink smooth to="#our-story" activeClassName="nav-links-active" className="nav-links">
              Our Story
            </NavHashLink >
          </li>
          <li className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <NavHashLink smooth to="#when-and-where" activeClassName="nav-links-active" className="nav-links">
              When & Where
            </NavHashLink>
          </li>
          <li className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <NavHashLink smooth to="#attires-and-gift" activeClassName="nav-links-active" className="nav-links">
              Attires & Gift
            </NavHashLink>
          </li>
          <li smooth className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <NavHashLink smooth to="#faq" activeClassName="nav-links-active" className="nav-links">
              FAQ
            </NavHashLink>
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
