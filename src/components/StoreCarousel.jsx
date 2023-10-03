import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import badges from "../assets/images/badges.png";
import landing from "../assets/images/landing-image.jpg";
import liesofp from "../assets/images/liesofp.png";
import liesofp1 from "../assets/images/liesofp1.png";
import liesofp2 from "../assets/images/liesofp2.png";

import liesofp3 from "../assets/images/liesofp3.png";

import liesofp4 from "../assets/images/liesofp4.png";

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
              <img src={liesofp} alt="placeholder image" />
            </div>
            <div className="center-info">
              <div className="center-info-title">
                <p>Lies of P</p>
              </div>
              <div className="center-info-screens">
                <div className="tiny-screens">
                  <img src={liesofp1} alt="placeholder image" />
                </div>
                <div className="tiny-screens">
                  <img src={liesofp2} alt="placeholder image" />
                </div>
                <div className="tiny-screens">
                  <img src={liesofp3} alt="placeholder image" />
                </div>
                <div className="tiny-screens">
                  <img src={liesofp4} alt="placeholder image" />
                </div>
              </div>
              <div className="center-info-price">
                <div className="center-info-avai">
                  <p>Now Available</p>
                </div>
                <div className="tags">
                  <ul>
                    <li>Souls-like</li>
                    <li>Dark Fantasy</li>
                    <li>Action RPG</li>
                  </ul>
                </div>
                <div className="price">
                  <p>$59.99</p>{" "}
                </div>
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
