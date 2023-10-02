import React, { useEffect, useState } from "react";
import GameBar from "../components/GameBar";
import "./Library.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCirclePlay,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
const ProjectsPage = () => {
  return (
    <div className="library">
      <div className="library-sidebar">
        <div className="home-side-container">
          <div className="home-bar">
            <p>HOME</p>
          </div>
          <div className="home-bar-square">
            <div>
              <FontAwesomeIcon id="square" icon={faSquare} />
              <FontAwesomeIcon id="square" icon={faSquare} />
            </div>
            <div>
              <FontAwesomeIcon id="square" icon={faSquare} />
              <FontAwesomeIcon id="square" icon={faSquare} />
            </div>
          </div>
        </div>
        <div className="side-list-container">
          <div className="games-filter-box">
            <div>
              <p>Games And Software</p>
            </div>
            <div>
              <FontAwesomeIcon id="clock" icon={faClock} />
              <FontAwesomeIcon id="play" icon={faCirclePlay} />
            </div>
          </div>
          <div className="search-box"></div>
          <div className="library-list"></div>
        </div>
      </div>
      <div></div>
      <GameBar />
    </div>
  );
};

export default ProjectsPage;
