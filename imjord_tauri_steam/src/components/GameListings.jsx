import React from "react";
import "./GameListings.css";
import imagePlaceholder from "../assets/images/placeholder.png";
import windows from "../assets/images/windows.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import squad1 from "../assets/images/squad1.png";
import squad2 from "../assets/images/squad2.png";
import squad3 from "../assets/images/squad3.png";
import squad4 from "../assets/images/squad4.png";

const GameListings = () => {
  return (
    <div className="game-listing">
      <div className="game-listing-title-container">
        <div className="game-listing-title">
          <div>
            <p>New & Trending</p>
          </div>
          <div>
            <p id="hawt">Top Sellers</p>
          </div>
          <div>
            <p>Popular Upcoming</p>
          </div>
          <div>
            <p>Specials</p>
          </div>
        </div>
      </div>
      <div className="game-listing-cards">
        <div className="game-listing-cards-box">
          <div className="game-cards">
            <div className="game-cards-title">
              <p>See More:</p> <span>New Releases</span>
            </div>
            <div className="cards">
              <div className="cards-img">
                <img src={imagePlaceholder} alt="hyh" />
              </div>
              <div className="cards-details">
                <div className="card-details-title">
                  <div className="card-details-p">
                    <p>Squad</p>
                    <img
                      id="windows-logo"
                      src={windows}
                      alt="lil windows image lul"
                    />
                  </div>
                  <div className="card-details-tags">
                    <p>Military, RPG</p>
                  </div>
                </div>
                <div className="card-details-price">
                  <div>
                    <p> -50% </p>
                  </div>
                  <div>
                    <p>$19.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="game-cards-images-details">
            <div className="game-cards-images-title">
              <p>Squad</p>
            </div>
            <div className="card-reviews">
              <p>Overall user reviews:</p>
              <p>
                Very Positive <span>(50)</span>
              </p>
            </div>
            <div className="card-image-tags">
              <p>multiplayer</p>
              <p>multiplayer</p>
              <p>multiplayer</p>
            </div>
            <div className="card-image-screenshot">
              <img src={squad1} />
              <img src={squad2} />

              <img src={squad3} />

              <img src={squad4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameListings;
