import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./StoreCarousel.css";
const StoreCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-left">
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div className="carousel-card">images</div>
      <div className="carousel-right">
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
};

export default StoreCarousel;
