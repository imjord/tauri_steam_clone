// HomePage.js
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";

import "./HomePage.css";
function HomePage(props) {
  const { getSessionUser } = props;
  useEffect(() => {
    getSessionUser();
  });
  return (
    <div className="home-page">
      <SearchBar />
    </div>
  );
}

export default HomePage;
