// HomePage.js
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import "./HomePage.css";
import GameBar from "../components/GameBar";
function HomePage(props) {
  const { getSessionUser } = props;
  useEffect(() => {
    getSessionUser();
  });
  return (
    <div className="home-page">
      <SearchBar />
      {/* <Footer /> */}
      <GameBar />
    </div>
  );
}

export default HomePage;
