import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <NavBar />
      <div className="storyDIV" />
    </div>
  );
}

export default Home;
