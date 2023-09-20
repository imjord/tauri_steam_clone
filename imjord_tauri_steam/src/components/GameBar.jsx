import React from "react";
import "./GameBar.css";

const GameBar = () => {
  return (
    <div data-tauri-drag-region className="game-bar">
      <div>Add a Game</div>
      <div>Manage Downloads</div>
      <div>Friends & Chat</div>
    </div>
  );
};

export default GameBar;
