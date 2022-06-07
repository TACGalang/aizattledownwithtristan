import { useState, useEffect, useRef } from "react";
import AttiresAndGifts from "../../Components/AttiresAndGifts";
import FAQ from "../../Components/FAQ";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import MobileNavBar from "../../Components/MobileNavBar";
import { NavBar } from "../../Components/NavBar.js";
import OurStory from "../../Components/OurStory";
import WhenAndWhere from "../../Components/WhenAndWhere";
import "./style.css";

const Home = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const [menuHidden, setMenuHidden] = useState(false);
  const handleClicked = () => setMenuClicked(!menuClicked);
  const whenAndWhereRef = useRef();
  const attiresAndGiftRef = useRef();
  const ourStoryRef = useRef();
  const FAQRef = useRef();
  const footerRef = useRef();

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
        className={menuHidden ? "menu-icon-active" : "menu-icon-black"}
        onClick={handleClicked}
      >
        <MobileNavBar isHidden={menuHidden} />
        <i className={menuClicked ? "fa fa-times" : "fas fa-bars"} />
      </div>
      <Header />
      <NavBar isNavBarActive={menuClicked} callHandleClick={handleClicked} />
      <OurStory reference={ourStoryRef} />
      <WhenAndWhere reference={whenAndWhereRef} />
      <AttiresAndGifts reference={attiresAndGiftRef} />
      <FAQ reference={FAQRef} />
      <Footer reference={footerRef} />
    </div>
  );
};

export default Home;
