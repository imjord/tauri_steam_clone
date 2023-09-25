// HomePage.js
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import "./HomePage.css";
import GameBar from "../components/GameBar";
import StoreSideBar from "../components/StoreSideBar";
import StoreCarousel from "../components/StoreCarousel";
import StoreLandingImage from "../components/StoreLandingImage";
import SpecialOffers from "../components/SpecialOffers";
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
      {/* <hr className="hr" /> */}
      <SpecialOffers />

      <GameBar />
    </div>
  );
}

export default HomePage;
