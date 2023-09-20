import React from "react";
import landingimage from "../assets/images/landing-image.jpg";
import "./StoreLanding.css";

const StoreLandingImage = () => {
  return (
    <div className="landing-image">
      <img src={landingimage} alt="landing-store-image-hitman-game" />
    </div>
  );
};

export default StoreLandingImage;
