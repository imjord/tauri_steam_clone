import React, { useEffect, useState } from "react";
import GameBar from "../components/GameBar";
import "./Library.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCirclePlay,
  faSquare,
  faSliders,
  faSearch,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import bg3 from "../assets/images/bg3List.png";
import cyberpunklist from "../assets/images/cyberpunkList.png";
import eldenList from "../assets/images/eldenList.png";
import massList from "../assets/images/massList.png";
import starList from "../assets/images/starList.png";
import gtaList from "../assets/images/gtaList.png";
import skyrimList from "../assets/images/skyrimList.png";
import morrowindList from "../assets/images/morrowindList.png";
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
              <FontAwesomeIcon icon={faAngleDown} id="faDownGame" />
            </div>
            <div>
              <FontAwesomeIcon id="clock" icon={faClock} />
              <FontAwesomeIcon id="play" icon={faCirclePlay} />
            </div>
          </div>
          <div className="search-box">
            <FontAwesomeIcon id="search-box" icon={faSearch} />
            <input type="text" placeholder="Search by Name" />
            <FontAwesomeIcon id="slider" icon={faSliders} />
          </div>
          <div className="library-list"></div>
        </div>
      </div>
      <div className="library-right">
        <div className="recent-games-list">
          <div>
            <p>RECENT (8)</p>
          </div>
          <div>
            <hr></hr>
          </div>
        </div>
        <div className="sort-by-list">
          <p>SORT BY</p>
          <span>Alphabetical</span>
        </div>
        <div className="right-list">
          <div>
            <img src={bg3} />
          </div>
          <div>
            {" "}
            <img src={cyberpunklist} />
          </div>
          <div>
            {" "}
            <img src={eldenList} />
          </div>
          <div>
            {" "}
            <img src={morrowindList} />
          </div>
          <div>
            {" "}
            <img src={skyrimList} />
          </div>
          <div>
            {" "}
            <img src={gtaList} />
          </div>
          <div>
            {" "}
            <img src={massList} />
          </div>
          <div>
            {" "}
            <img src={starList} />
          </div>
        </div>
      </div>
      <GameBar />
    </div>
  );
};

export default ProjectsPage;
