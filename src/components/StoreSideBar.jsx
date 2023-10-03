import React from "react";
import "./StoreSideBar.css";
import steamdeck from "../assets/images/steam-deck.png";

const StoreSideBar = () => {
  return (
    <div className="sidebar">
      <img src={steamdeck} alt="steamdeck image" />
    </div>
  );
};

export default StoreSideBar;
