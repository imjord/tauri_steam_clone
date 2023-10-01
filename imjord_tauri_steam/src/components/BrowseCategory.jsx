import React from "react";
import "./BrowseCategory.css";
import anime from "../assets/images/anime.png";
import action from "../assets/images/action.png";
import strategy from "../assets/images/strategy.png";
import roleplaying from "../assets/images/role-playing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const BrowseCategory = () => {
  return (
    <div className="category">
      <div className="angles">
        <FontAwesomeIcon id="angle" icon={faAngleLeft} />
      </div>
      <div className="categories">
        <div className="category-title">
          <p>BROWSE BY CATEGORY</p>
        </div>

        <div className="categories-box">
          <div>
            <img src={anime} alt="anime category" />
          </div>
          <div>
            {" "}
            <img src={strategy} alt="anime category" />
          </div>
          <div>
            {" "}
            <img src={roleplaying} alt="anime category" />
          </div>
          <div>
            {" "}
            <img src={action} alt="anime category" />
          </div>
        </div>
      </div>

      <div className="angles">
        <FontAwesomeIcon id="angle" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default BrowseCategory;
