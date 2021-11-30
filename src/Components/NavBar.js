import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NarBar.css";

export const NavBar = ({isNavBarActive}) => {
  return (
    <>
      <nav className={isNavBarActive ? "navbar-active" : "navbar"}>
        <ul className="nav-menu-list">
          <li className="nav-menu-item">
            <Link to="/" className="nav-links">
              Our Story
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/" className="nav-links">
              When & Where
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/" className="nav-links">
              Attires & Gift
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/" className="nav-links">
              FAQ
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/" className="nav-links">
              RSVP
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
