import React from "react";
import "./StoreSideBar.css";
const StoreSideBar = () => {
  return (
    <div className="store-sidebar-container">
      <div>
        <h5>STEAM DECK</h5>
        <p>Get yours now</p>
      </div>
      <div>
        <h5>STEAM GIFT CARDS</h5>
        <p>Give the gift of game</p>
      </div>
      <div>
        <h6>RECENTLY VIEWED</h6>
        <ul>
          <li>mount and blade</li>
        </ul>
      </div>
      <div>
        <h6>YOUR TAGS</h6>
      </div>
      <div>
        <h6>RECOMMENDED</h6>
      </div>
      <div>
        <h6>BROWSE CATEGORIES</h6>
      </div>
      <div>
        <h6>HARDWARE</h6>
      </div>
      <div>
        <h6>BROWSE BY GENRE</h6>
      </div>
    </div>
  );
};

export default StoreSideBar;
