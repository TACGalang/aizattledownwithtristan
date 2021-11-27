import React, { useState } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
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
    }
  };

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
      <NavBar />
      <div className="storyDIV" />
    </div>
  );
}

export default Home;
