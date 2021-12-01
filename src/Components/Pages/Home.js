import React, { useState, useEffect } from "react";
import AttiresAndGifts from "../AttiresAndGifts";
import Gallery from "../Gallery";
import Header from "../Header";
import { NavBar } from "../NavBar.js";
import OurStory from "../OurStory";
import WhenAndWhere from "../WhenAndWhere";
import "./Home.css";

function Home() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);
  const handleClicked = () => setMenuClicked(!menuClicked);

  const changeMenuIconVisibility = () => {
    if (window.scrollY >= 100) {
      setMenuHidden(false);
    } else {
      setMenuHidden(true);
      setMenuClicked(false);
    }
  };

  useEffect(() => {
    changeMenuIconVisibility();
  }, []);

  window.addEventListener("scroll", changeMenuIconVisibility);

  return (
    <div className="home-page">
      <div
        className={menuHidden ? "menu-icon-inactive" : "menu-icon-active"}
        onClick={handleClicked}
      >
        <i className={menuClicked ? "fa fa-times" : "fas fa-bars"} />
      </div>
      <Header />
      <NavBar isNavBarActive={menuClicked} />
      <OurStory />
      <Gallery />
      <WhenAndWhere />
      <AttiresAndGifts />
    </div>
  );
}

export default Home;
