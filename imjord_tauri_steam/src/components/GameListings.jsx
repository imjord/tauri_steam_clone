import React from "react";
import "./GameListings.css";
import imagePlaceholder from "../assets/images/placeholder.png";
import windows from "../assets/images/windows.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import squad1 from "../assets/images/squad1.png";
import squad2 from "../assets/images/squad2.png";
import squad3 from "../assets/images/squad3.png";
import squad4 from "../assets/images/squad4.png";
import partyanimal from "../assets/images/partyanimal-home.png";
import deckhome from "../assets/images/deck-home.png";
import callhome from "../assets/images/call-home.png";
import socchome from "../assets/images/socc-home.png";
import mkhome from "../assets/images/mk-home.png";
import lostarkhome from "../assets/images/lost-ark-home.png";
import warhome from "../assets/images/war-home.png";
import destinyhome from "../assets/images/destiny-home.png";

const GameListings = () => {
  return (
    <div className="game-listing">
      <div className="game-listing-title-container">
        <div className="game-listing-title">
          <div>
            <p>New & Trending</p>
          </div>
          <div>
            <p id="hawt">Top Sellers</p>
          </div>
          <div>
            <p>Popular Upcoming</p>
          </div>
          <div>
            <p>Specials</p>
          </div>
        </div>
      </div>
      <div className="game-listing-cards">
        <div className="game-listing-cards-box">
          <div className="game-cards">
            <div className="game-cards-title">
              <p>See More:</p> <span>New Releases</span>
            </div>

            <div className="cards">
              <div className="cards-img">
                <img src={imagePlaceholder} alt="hyh" />
              </div>
              <div className="cards-details">
                <div className="card-details-title">
                  <div className="card-details-p">
                    <p>Squad</p>
                    <img
                      id="windows-logo"
                      src={windows}
                      alt="lil windows image lul"
                    />
                  </div>
                  <div className="card-details-tags">
                    <p>Military, RPG</p>
                  </div>
                </div>
                <div className="card-details-price">
                  <div>
                    <p> -50% </p>
                  </div>
                  <div>
                    <p>$19.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cards-img">
                <img src={partyanimal} alt="hyh" />
              </div>
              <div className="cards-details-alt">
                <div className="card-details-title">
                  <div className="card-details-p">
                    <p>Party Animals</p>
                    <img
                      id="windows-logo"
                      src={windows}
                      alt="lil windows image lul"
                    />
                  </div>
                  <div className="card-details-tags">
                    <p>Casual, Funny</p>
                  </div>
                </div>
                <div className="card-details-price-alt">
                  <div></div>
                  <div>
                    <p>$19.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cards-img">
                <img src={deckhome} alt="hyh" />
              </div>
              <div className="cards-details-alt">
                <div className="card-details-title">
                  <div className="card-details-p">
                    <p>Steam Deck</p>
                    <img
                      id="windows-logo"
                      src={windows}
                      alt="lil windows image lul"
                    />
                  </div>
                  <div className="card-details-tags"></div>
                </div>
                <div className="card-details-price-alt">
                  <div></div>
                  <div>
                    <p>$399.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cards-img">
                <img src={callhome} alt="hyh" />
              </div>
              <div className="cards-details-alt">
                <div className="card-details-title">
                  <div className="card-details-p">
                    <p>Call of Duty&reg;</p>
                    <img
                      id="windows-logo"
                      src={windows}
                      alt="lil windows image lul"
                    />
                  </div>
                  <div className="card-details-tags">
                    <p>FPS, Shooter, Action</p>
                  </div>
                </div>
                <div className="card-details-price-alt">
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cards-img">
                <img src={socchome} alt="hyh" />
              </div>
              <div className="cards-details-alt">
                <div className="card-details-title">
                  <div className="card-details-p">
                    <p>Football 24</p>
                    <img
                      id="windows-logo"
                      src={windows}
                      alt="lil windows image lul"
                    />
                  </div>
                  <div className="card-details-tags">
                    <p>Sports, Football (Soccer)</p>
                  </div>
                </div>
                <div className="card-details-price-alt">
                  <div>
                    <p> </p>
                  </div>
                  <div>
                    <p>$69.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cards-img">
                <img src={mkhome} alt="hyh" />
              </div>
              <div className="cards-details-alt">
                <div className="card-details-title">
                  <div className="card-details-p">
                    <p>Mortal Kombat 1</p>
                    <img
                      id="windows-logo"
                      src={windows}
                      alt="lil windows image lul"
                    />
                  </div>
                  <div className="card-details-tags">
                    <p>Fighting, Action, Gore</p>
                  </div>
                </div>
                <div className="card-details-price-alt">
                  <div>
                    <p> </p>
                  </div>
                  <div>
                    <p>$69.99</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cards-img">
                <img src={lostarkhome} alt="hyh" />
              </div>
              <div className="cards-details-alt">
                <div className="card-details-title">
                  <div className="card-details-p">
                    <p>Lost Ark</p>
                    <img
                      id="windows-logo"
                      src={windows}
                      alt="lil windows image lul"
                    />
                  </div>
                  <div className="card-details-tags">
                    <p>Action RPG, Multiplayer</p>
                  </div>
                </div>
                <div className="card-details-price-alt">
                  <div></div>
                  <div>
                    <p>Free to Play</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cards-img">
                <img src={warhome} alt="hyh" />
              </div>
              <div className="cards-details-alt">
                <div className="card-details-title">
                  <div className="card-details-p">
                    <p>War Thunder</p>
                    <img
                      id="windows-logo"
                      src={windows}
                      alt="lil windows image lul"
                    />
                  </div>
                  <div className="card-details-tags">
                    <p>Combat, VR</p>
                  </div>
                </div>
                <div className="card-details-price-alt">
                  <div></div>
                  <div>
                    <p>Free to Play</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards">
              <div className="cards-img">
                <img src={destinyhome} alt="hyh" />
              </div>
              <div className="cards-details-alt">
                <div className="card-details-title">
                  <div className="card-details-p">
                    <p>Destiny 2</p>
                    <img
                      id="windows-logo"
                      src={windows}
                      alt="lil windows image lul"
                    />
                  </div>
                  <div className="card-details-tags">
                    <p>Open World, MMORPG</p>
                  </div>
                </div>
                <div className="card-details-price-alt">
                  <div></div>
                  <div>
                    <p>Free to Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="game-cards-images-details">
            <div className="game-cards-images-title">
              <p>Squad</p>
            </div>
            <div className="card-reviews">
              <p>Overall user reviews:</p>
              <p>
                Very Positive <span>(50)</span>
              </p>
            </div>
            <div className="card-image-tags">
              <p>multiplayer</p>
              <p>multiplayer</p>
              <p>multiplayer</p>
            </div>
            <div className="card-image-screenshot">
              <img src={squad1} />
              <img src={squad2} />

              <img src={squad3} />

              <img src={squad4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameListings;
