import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NarBar.css";
import { Link as LinkS } from "react-scroll";

export const NavBar = ({ isNavBarActive, callHandleClick }) => {
  return (
    <>
      <nav className={isNavBarActive ? "navbar-active" : "navbar"}>
        <ul className="nav-menu-list">
          <li
            className="nav-menu-item"
            onClick={isNavBarActive ? callHandleClick : null}
          >
            <LinkS
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
              to="our-story"
              activeClass="nav-links-active"
              className="nav-links"
              onClick={isNavBarActive ? callHandleClick : null}
            >
              Our Story
            </LinkS>
          </li>
          <li
            className="nav-menu-item"
            onClick={isNavBarActive ? callHandleClick : null}
          >
            <LinkS
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
              to="when-and-where"
              activeClass="nav-links-active"
              className="nav-links"
              onClick={isNavBarActive ? callHandleClick : null}
            >
              When & Where
            </LinkS>
          </li>
          <li
            className="nav-menu-item"
            onClick={isNavBarActive ? callHandleClick : null}
          >
            <LinkS
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
              to="attires-and-gift"
              activeClass="nav-links-active"
              className="nav-links"
              onClick={isNavBarActive ? callHandleClick : null}
            >
              Attires & Gift
            </LinkS>
          </li>
          <li
            smooth
            className="nav-menu-item"
            onClick={isNavBarActive ? callHandleClick : null}
          >
            <LinkS
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-60}
              to="faq"
              activeClass="nav-links-active"
              className="nav-links"
              onClick={isNavBarActive ? callHandleClick : null}
            >
              FAQ
            </LinkS>
          </li>
          <li className="nav-menu-item">
            <Link to="/rsvp" className="nav-links">
              RSVP
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
