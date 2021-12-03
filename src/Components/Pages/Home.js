import React, { useState, useEffect } from "react";
import AttiresAndGifts from "../AttiresAndGifts";
import FAQ from "../FAQ";
import Footer from "../Footer";
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
        className="menu-icon-active"
        onClick={handleClicked}
      >
        <i className={menuClicked ? "fa fa-times" : "fas fa-bars"} />
      </div>
      <Header />
      <NavBar isNavBarActive={menuClicked} callHandleClick={handleClicked}/>
      <OurStory />
      <Gallery />
      <WhenAndWhere />
      <AttiresAndGifts />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
