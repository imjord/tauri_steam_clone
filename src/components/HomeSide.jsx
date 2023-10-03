import React from "react";
import steamdeckside from "../assets/images/steam-deck-side.png";
import steamcards from "../assets/images/steam-cards.png";
import "./HomeSide.css";
const HomeSide = () => {
  return (
    <div className="home-side">
      <img src={steamdeckside} />
      <img src={steamcards} />
      <div className="side-ul-list">
        <div>
          <h2>RECOMMENDED</h2>
          <ul>
            <li>By Friends</li>
            <li>By Curators</li>
            <li>Tags</li>
          </ul>
          <h2>BROWSE CATEGORIES</h2>
          <ul>
            <li>Top Sellers</li>
            <li>New Releases</li>
            <li>Upcoming</li>
            <li>Specials</li>
            <li>VR Titles</li>
            <li>Controller-Friendly</li>
            <li>Great on Deck</li>
          </ul>

          <h2>HARDWARE</h2>
          <ul>
            <li>Steam Deck</li>
            <li>Steam Deck Dock</li>
            <li>VR Hardware</li>
          </ul>

          <h2>BROWSE BY GENRE</h2>
          <ul>
            <li>Free to Play</li>
            <li>Early Access</li>
            <li>Action</li>
            <li>Adventure</li>
            <li>Casual</li>
            <li>Indie</li>
            <li>Massively Multiplayer</li>
            <li>Racing</li>
            <li>RPG</li>
            <li>Simulation</li>
            <li>Sports</li>
            <li>Strategy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeSide;
