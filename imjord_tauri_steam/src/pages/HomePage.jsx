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
import SteamDeckBar from "../components/SteamDeckBar";
import BrowseCategory from "../components/BrowseCategory";
import DiscoveryQue from "../components/DiscoveryQue";
import GameListings from "../components/GameListings";
import HomeSide from "../components/HomeSide";
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
      <div className="side">
        <HomeSide />
      </div>
      <StoreCarousel />
      {/* <hr className="hr" /> */}
      <SpecialOffers />
      <SteamDeckBar />
      <BrowseCategory />
      <DiscoveryQue />
      <GameListings />
      <GameBar />
    </div>
  );
}

export default HomePage;
