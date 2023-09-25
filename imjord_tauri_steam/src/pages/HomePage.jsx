// HomePage.js
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import "./HomePage.css";
import GameBar from "../components/GameBar";
import StoreSideBar from "../components/StoreSideBar";
import StoreCarousel from "../components/StoreCarousel";
import StoreLandingImage from "../components/StoreLandingImage";
function HomePage(props) {
  const { getSessionUser } = props;
  useEffect(() => {
    getSessionUser();
  }, []);
  return (
    <div className="home-page">
      <SearchBar />
      {/* <Footer /> */}
      <div className="landing">
        <StoreLandingImage />
      </div>
      <StoreCarousel />

      <GameBar />
    </div>
  );
}

export default HomePage;
