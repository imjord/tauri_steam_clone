// HomePage.js
import React, { useState, useEffect } from "react";

import "./HomePage.css";
function HomePage(props) {
  const { getSessionUser } = props;
  useEffect(() => {
    getSessionUser();
  });
  return <div className="home-page">Store Page</div>;
}

export default HomePage;
