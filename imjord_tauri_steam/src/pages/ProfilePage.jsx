import React, { useEffect } from "react";
import "./ProfilePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRibbon,
  faUsersRectangle,
  faIdBadge,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import ProfileHourCard from "../components/ProfileHourCard";

const ProfilePage = (props) => {
  const { sessionUser } = props;
  return (
    <div className="profile-page">
      <div className="profile-background"></div>
      <div className="profile-content-div">
        <div className="profile-content-title">
          <div className="profile-pic">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/6/62/Agent_47_in_Hitman_Absolution.png"
              alt="profile-pic"
            />
          </div>
          <div className="profile-bio">
            <h1>{sessionUser.username}</h1>
            <p>{sessionUser.username}</p>
          </div>
          <div className="profile-level">
            <div className="level">
              <h1>Level </h1>
              <h2>75</h2>
            </div>
            <div className="fav-badge">
              <div>
                <FontAwesomeIcon id="ribbon" icon={faRibbon} />
              </div>
              <div>
                <p>Community Patron</p>
                <p>140xp</p>
              </div>
            </div>
            <div className="profile-btns">
              <button>Message</button>
              <button>
                <FontAwesomeIcon id="users" icon={faUsersRectangle} />
              </button>
              <button>
                <FontAwesomeIcon id="badge" icon={faIdBadge} />
              </button>
              <button>
                ...
                <FontAwesomeIcon id="sort" icon={faSortDown} />
              </button>
            </div>
          </div>
        </div>
        <div className="profile-content-text">
          <div className="comments"></div>

          <div className="badges"></div>
        </div>
        <div className="profile-grid">
          <ProfileHourCard />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
