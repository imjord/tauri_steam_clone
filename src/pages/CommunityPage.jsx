import React from "react";
import "./CommunityPage.css";
import GameBar from "../components/GameBar";
import cyber from "../assets/images/cyber-small.png";
import elden from "../assets/images/elden-small.png";
import baulders from "../assets/images/baulders-small.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const CommunityPage = () => {
  return (
    <div className="community">
      <div className="community-title">
        <div>
          <h4>Community Activity</h4>
        </div>
        <div>
          <p>
            Community and official content for all games and software on Steam.
          </p>
        </div>
      </div>
      <div className="recent-game-hubs">
        <div className="recent-games">
          <div className="recently-played">
            <div className="recently-title">
              <p>YOUR RECENTLY PLAYED GAMES</p>
            </div>
            <div className="recently-community-games">
              <div className="rp-container">
                <img src={cyber} />
                <div className="rp">
                  <p>Cyberpunk 2077</p>
                  <p>951 new artwork this week</p>
                </div>
              </div>
              <div className="rp-container">
                <img src={elden} />
                <div className="rp">
                  <p>Elden Ring</p>
                  <p>17 new artwork this week</p>
                </div>
              </div>
              <div className="rp-container">
                <img src={baulders} />
                <div className="rp">
                  <p>Baldur's Gate 3</p>
                  <p>303 new artwork this week</p>
                </div>
              </div>
            </div>
          </div>
          <div className="recently-hubs">
            <div className="recently-title">
              <p>YOUR RECENTLY VIEWED HUBS</p>
            </div>
            <div className="recently-community-games">
              <div className="rp-container">
                <img src={cyber} />
                <div className="rp">
                  <p>Cyberpunk 2077</p>
                  <p>951 new artwork this week</p>
                </div>
              </div>
              <div className="rp-container">
                <img src={elden} />
                <div className="rp">
                  <p>Elden Ring</p>
                  <p>17 new artwork this week</p>
                </div>
              </div>
              <div className="rp-container">
                <img src={baulders} />
                <div className="rp">
                  <p>Baldur's Gate 3</p>
                  <p>303 new artwork this week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hubs">
          <div className="find-hubs">
            <div>
              <p>FIND HUBS</p>
            </div>
            <div>
              <input type="text" placeholder="Search for products" />
              <FontAwesomeIcon icon={faMagnifyingGlass} id="hub-search" />
            </div>
          </div>
          <div className="find-people">
            <div>
              <p>FIND PEOPLE</p>
            </div>
            <div>
              {" "}
              <input type="text" placeholder="Search for friends" />
              <FontAwesomeIcon icon={faMagnifyingGlass} id="hub-search" />
            </div>
          </div>
        </div>
      </div>
      <GameBar />
    </div>
  );
};

export default CommunityPage;
