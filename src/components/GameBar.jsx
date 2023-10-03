import React from "react";
import "./GameBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faDownload,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
const GameBar = () => {
  return (
    <div data-tauri-drag-region className="game-bar">
      <div>
        <FontAwesomeIcon id="add-game-icon" icon={faPlus} />
        <p>Add a Game</p>
      </div>
      <div>
        {" "}
        <FontAwesomeIcon icon={faDownload} /> <p>Manage Downloads</p>
      </div>
      <div>
        <p>Friends & Chat</p> <FontAwesomeIcon icon={faUserGroup} />
      </div>
    </div>
  );
};

export default GameBar;
