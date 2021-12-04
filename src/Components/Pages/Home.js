import React, { useState, useEffect, useRef } from "react";
import AttiresAndGifts from "../AttiresAndGifts";
import Entourage from "../Entourage";
import FAQ from "../FAQ";
import Footer from "../Footer";
import Gallery from "../Gallery";
import Header from "../Header";
import MobileNavBar from "../MobileNavBar";
import { NavBar } from "../NavBar.js";
import OurStory from "../OurStory";
import WhenAndWhere from "../WhenAndWhere";
import "./Home.css";

function Home() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);
  const handleClicked = () => setMenuClicked(!menuClicked);
  const whenAndWhereRef = useRef();
  const attiresAndGiftRef = useRef();
  const ourStoryRef = useRef();
  const FAQRef = useRef();
  const footerRef = useRef();

  const navHeaders = [ ourStoryRef, whenAndWhereRef, attiresAndGiftRef, FAQRef ];

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
      <div className={menuHidden ? "menu-icon-active" : "menu-icon-black" }  onClick={handleClicked}>
        <MobileNavBar isHidden={menuHidden}/>
        <i className={menuClicked ? "fa fa-times" : "fas fa-bars"} />
      </div>
      <Header />
      <NavBar isNavBarActive={menuClicked} callHandleClick={handleClicked} navHeaders={navHeaders}/>
      <OurStory reference={ourStoryRef}/>
      <Gallery/>
      <WhenAndWhere reference={whenAndWhereRef}/>
      <AttiresAndGifts reference={attiresAndGiftRef}/>
      <FAQ reference={FAQRef}/>
      <Footer reference={footerRef}/>
    </div>
  );
}

export default Home;
