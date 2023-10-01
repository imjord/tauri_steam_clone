import React from "react";
import "./SteamDeckBar.css";
import deck from "../assets/images/deck.png";
import index from "../assets/images/index.png";

const SteamDeckBar = () => {
  return (
    <div className="steam-deck">
      <div className="steam-deck-container">
        <div className="steam-deck-img">
          <img src={deck} alt="deck" />
        </div>
        <div className="valve-index">
          <img src={index} alt="deck" />
        </div>
      </div>
    </div>
  );
};

export default SteamDeckBar;
