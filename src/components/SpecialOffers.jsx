import React from "react";
import "./SpecialOffer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import grid1 from "../assets/images/grid1.png";
import grid2 from "../assets/images/grid2.png";
import grid3 from "../assets/images/grid3.png";
import grid4 from "../assets/images/grid4.png";
const SpecialOffers = () => {
  return (
    <div className="special">
      <div className="angle-left-s">
        <FontAwesomeIcon id="angle" icon={faAngleLeft} />
      </div>
      <div className="special-center">
        <div className="special-title">
          <div className="special-title-left">
            <p>SPECIAL OFFERS</p>
          </div>
          <div className="special-title-right">
            <p>BROWSE MORE</p>
          </div>
        </div>
        <div className="special-content">
          <div className="grid1">
            <div className="special-img-detail">
              <img src={grid1} alt="grid1 image" />
            </div>
            <div className="special-details">
              <div>
                <p>WEEKEND DEAL</p>
              </div>
              <div>
                <p>Offer ends Oct 5 @ 11:00am.</p>
              </div>
              <div>
                <p>50% off</p>
              </div>
            </div>
          </div>
          <div className="grid1">
            <div className="special-img-detail">
              <img src={grid2} alt="grid1 image" />
            </div>
            <div className="special-details">
              <div>
                <p>WEEKEND DEAL</p>
              </div>
              <div>
                <p>Offer ends Oct 5 @ 11:00am.</p>
              </div>
              <div>
                <p>50% off</p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid3">
              <div className="special-img-detail-alt">
                <img src={grid3} alt="grid1 image" />
              </div>
              <div className="special-details-alt">
                <div>Today's deal!</div>
                <div>50% off</div>
              </div>
            </div>
            <div className="grid4">
              <div className="special-img-detail-alt">
                <img src={grid4} alt="grid1 image" />
              </div>
              <div className="special-details-alt">
                <div>Today's deal!</div>
                <div>50% off</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="angle-left-r">
        <FontAwesomeIcon id="angle" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default SpecialOffers;
