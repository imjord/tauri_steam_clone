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
import minibg from "../assets/images/minibg3.png";
import miniskyrim from "../assets/images/miniskyrim.png";
import minimass from "../assets/images/minimass.png";
import minielden from "../assets/images/minielden.png";
import minicyber from "../assets/images/minicyber.png";
import ministar from "../assets/images/ministar.png";
import minigta from "../assets/images/minigta.png";
import minimorrow from "../assets/images/minimorrow.png";
import bg3 from "../assets/images/bg3List.png";
import cyberpunklist from "../assets/images/cyberpunkList.png";
import eldenList from "../assets/images/eldenList.png";
import massList from "../assets/images/massList.png";
import starList from "../assets/images/starList.png";
import gtaList from "../assets/images/gtaList.png";
import skyrimList from "../assets/images/skyrimList.png";
import morrowindList from "../assets/images/morrowindList.png";
const ProjectsPage = () => {
  const [toggleGames, setToggleGames] = useState(false);

  const toggleRecentList = () => {
    setToggleGames(!toggleGames);
  };

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
          <div className="library-list">
            <div className="recent-list" onClick={toggleRecentList}>
              <p>
                <span id="plus">{toggleGames ? "- " : "+ "}</span> RECENT{" "}
                <span id="imdying">(8) </span>
              </p>
            </div>
            {toggleGames && (
              <div className="recent-games-list-idk">
                <ul>
                  <li>
                    <img src={minibg} />
                    Baldur's Gate 3
                  </li>
                  <li>
                    <img src={minicyber} />
                    CyberPunk 2077
                  </li>
                  <li>
                    <img src={minielden} />
                    ELDEN RING
                  </li>
                  <li>
                    <img src={minimass} />
                    Mass Effect Legendary Edition
                  </li>

                  <li>
                    <img src={ministar} />
                    Starfield
                  </li>

                  <li>
                    <img src={miniskyrim} />
                    The Elder Scrolls V: Skyrim Special Edition
                  </li>

                  <li>
                    <img src={minigta} />
                    Grand Theft Auto V
                  </li>

                  <li>
                    <img src={minimorrow} />
                    The Elder Scrolls III: Morrowwind
                  </li>
                </ul>
              </div>
            )}
          </div>
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
