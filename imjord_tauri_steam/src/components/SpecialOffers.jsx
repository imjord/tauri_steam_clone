import React from "react";
import "./SpecialOffer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SpecialOffers = () => {
  return (
    <div className="special">
      <div className="angle-left-s">
        <FontAwesomeIcon id="angle" icon={faAngleLeft} />
      </div>
      <div className="special-center">
        <div className="special-title">
          <div className="special-title-left">Special Offers</div>
          <div className="special-title-right">Browse More</div>
        </div>
        <div className="special-content">
          <div>grid1</div>
          <div>grid2</div>
          <div>grid3</div>
          <div>grid4</div>
        </div>
      </div>
      <div className="angle-left-r">
        {" "}
        <FontAwesomeIcon id="angle" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default SpecialOffers;
