import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import "./NarBar.css";

const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) return startIndex;
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].current.offsetTop -
          currentPosition
      )
    )
      return startIndex;
    else return endIndex;
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2);
    var a = Math.abs(
      sectionPositionArray[nextNearest].current.offsetTop -
        currentPosition
    );
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].current.offsetTop -
        currentPosition
    );
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      );
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      );
    }
  }
};

export const NavBar = ({ isNavBarActive, callHandleClick, navHeaders }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      var index = nearestIndex(window.scrollY, navHeaders, 0, navHeaders.length - 1)
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={isNavBarActive ? "navbar-active" : "navbar"}>
        <ul className="nav-menu-list">
          <li className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <NavHashLink smooth to="#our-story" onClick={() => setActiveIndex(0)} className={activeIndex === 0 ? "nav-links-active" : "nav-links"} >
              Our Story
            </NavHashLink >
          </li>
          <li className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <NavHashLink smooth to="#when-and-where" onClick={() => setActiveIndex(1)} className={activeIndex === 1 ? "nav-links-active" : "nav-links"}>
              When & Where
            </NavHashLink>
          </li>
          <li className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <NavHashLink smooth to="#attires-and-gift" onClick={() => setActiveIndex(2)} className={activeIndex === 2 ? "nav-links-active" : "nav-links"}>
              Attires & Gift
            </NavHashLink>
          </li>
          <li smooth className="nav-menu-item" onClick={isNavBarActive ? callHandleClick : null}>
            <NavHashLink smooth to="#faq" onClick={() => setActiveIndex(3)} className={activeIndex === 3 ? "nav-links-active" : "nav-links"}>
              FAQ
            </NavHashLink>
          </li>
          <li className="nav-menu-item">
            <Link to="/rsvp" onClick={() => setActiveIndex(4)} className={activeIndex === 4 ? "nav-links-active" : "nav-links"}>
              RSVP
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
