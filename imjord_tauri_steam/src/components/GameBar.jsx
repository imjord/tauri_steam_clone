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
        <FontAwesomeIcon icon={faPlus} />
        Add a Game
      </div>
      <div>
        {" "}
        <FontAwesomeIcon icon={faDownload} /> Manage Downloads
      </div>
      <div>
        Friends & Chat <FontAwesomeIcon icon={faUserGroup} />
      </div>
    </div>
  );
};

export default GameBar;
