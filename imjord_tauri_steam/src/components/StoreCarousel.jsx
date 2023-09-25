import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import badges from "../assets/images/badges.png";
import landing from "../assets/images/landing-image.jpg";
import "./StoreCarousel.css";
const StoreCarousel = () => {
  return (
    <div className="carousel-container">
      <div>
        <FontAwesomeIcon id="angle" icon={faAngleLeft} />
      </div>
      <div className="car-center">
        <div className="car-container">
          <div className="center-title">
            <p>FEATURED & RECOMMENDED</p>
          </div>
          <div className="center-content">
            <div className="center-big-image">
              <img src={landing} alt="placeholder image" />
            </div>
            <div className="center-info">
              <div className="center-info-title">
                <p>Cyberpunk 2077: Phantom Liberty</p>
              </div>
              <div className="center-info-screens">
                <div className="tiny-screens">
                  <img src={landing} alt="placeholder image" />
                </div>
                <div className="tiny-screens">
                  <img src={landing} alt="placeholder image" />
                </div>
                <div className="tiny-screens">
                  <img src={landing} alt="placeholder image" />
                </div>
                <div className="tiny-screens">
                  <img src={landing} alt="placeholder image" />
                </div>
              </div>
              <div className="center-info-price">
                <div className="center-info-avai">
                  <p>Now Available</p>
                </div>
                <div className="tags"> </div>
                <div> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <FontAwesomeIcon id="angle" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default StoreCarousel;
