import React from "react";
import "./ProfileHourCard.css";
import badges from "../assets/images/badges.png";
import kenshi from "../assets/images/kenshi.png";
import bannerlord from "../assets/images/bannerlord.png";
import fallout from "../assets/images/fallout.png";
import skyrim from "../assets/images/skyrim.png";
import skyrimac from "../assets/images/skyrim-ac.png";
import falloutac from "../assets/images/fallout-ac.png";
import bannerlordbar from "../assets/images/bannerlordbar.png";
import falloutbar from "../assets/images/fallout-bar.png";
import skyrimbar from "../assets/images/skyrim-bar.png";
import friends from "../assets/images/friends.png";
const ProfileHourCard = () => {
  return (
    <div class="grid-container">
      <div class="item1">
        <div className="about-title">
          <h5>Favorite Game</h5>
        </div>
        <div>
          <div className="about-wrapper">
            <div className="game-image">
              <img src={kenshi} alt="my favorite game" />
              <p>Kenshi</p>
            </div>
            <div className="favorite-game-hours">
              <p>188</p>
            </div>
            <div className="favorite-game-p">
              <p>Hours played</p>
            </div>
          </div>
        </div>
      </div>
      <div class="item2">
        <div className="online">
          <p>Currently In-Game</p>
          <p>The Elder Scrolls V: Skyrim Special Edition</p>
        </div>
        <div>
          <p className="side-p">
            Badges <span className="side-span">9</span>
          </p>
          <img src={badges} alt="badges" />
        </div>
        <div>
          <ul>
            <p className="side-p">
              Games <span className="side-span">156</span>
            </p>
            <p className="side-p">Inventory</p>
            <p className="side-p">Videos</p>
            <p className="side-p">Workshop Items</p>
            <p className="side-p">
              Reviews<span className="side-span">6</span>
            </p>
            <p className="side-p">Guides</p>
            <p className="side-p">Artwork</p>
          </ul>
        </div>
        <div>
          <p className="side-p">Groups</p>
        </div>
        <div>
          <p className="side-p">
            Friends<span className="side-span">14</span>
          </p>

          <img
            className="image-border"
            src={friends}
            alt="steam friends image"
          />
        </div>
      </div>
      <div class="item3">
        <div className="item3-wrapper">
          <div>
            <p>Recent Activity</p>
          </div>
          <div>
            <p>34.8 hours past 2 weeks</p>
          </div>
        </div>
      </div>
      <div class="item4">
        <div className="about-wrapper">
          <div className="favorite-game-image">
            <div className="game-image">
              <img src={skyrim} alt="skyrim cover game image" />
              <p className="game-text">
                The Elder Scrolls V: Skyrim Special Edition
              </p>
            </div>
            <div className="game-hours">
              <p>63 hours on record</p>
              <p>Currently In-Game</p>
            </div>
          </div>
          <div className="game-achivements">
            <div className="achivement-p">
              <p>Achievement Progress 12 of 75 </p>
            </div>
            <div className="progress-bar">
              <img src={skyrimbar} alt="skyrim achivement progress bar" />
            </div>
            <div>
              <img src={skyrimac} alt="image of skyrim achivement badges" />
            </div>
          </div>
        </div>
      </div>
      <div class="item5">
        <div className="about-wrapper">
          <div className="favorite-game-image">
            <div className="game-image">
              <img src={fallout} alt="fallout cover game image" />
              <p className="game-text">Fallout 4</p>
            </div>
            <div className="game-hours">
              <p>88 hours on record</p>
              <p>last played June 11</p>
            </div>
          </div>
          <div className="game-achivements">
            <div className="achivement-p">
              <p>Achievement Progress 27 of 84 </p>
            </div>
            <div className="progress-bar">
              <img src={falloutbar} alt="fallout achivement progress bar" />
            </div>
            <div>
              <img src={falloutac} alt="images of fallout achivement badges" />
            </div>
          </div>
        </div>
      </div>
      <div class="item6">
        {" "}
        <div className="about-wrapper">
          <div className="favorite-game-image">
            <div className="game-image">
              <img
                src={bannerlord}
                alt="Mount & Blade II: Bannerlord cover game image"
              />
              <p className="game-text">Mount & Blade II: Bannerlord</p>
            </div>
            <div className="game-hours">
              <p>177 hours on record</p>
              <p>last played June 6</p>
            </div>
          </div>
          <div className="game-achivements">
            <div className="achivement-p">
              <p>Achievement Progress 0 of 50 </p>
            </div>
            <div className="progress-bar">
              <img
                src={bannerlordbar}
                alt="bannerlord achivement progress bar"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="item7">
        <p>View All Recently Played | Wishlist | Reviews</p>
      </div>
    </div>
  );
};

export default ProfileHourCard;
