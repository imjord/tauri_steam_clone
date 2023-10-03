import React from "react";
import queue from "../assets/images/queue.png";
import "./DiscoveryQueue.css";
const DiscoveryQue = () => {
  return (
    <div className="queue">
      <div className="queue-title">
        <div>
          <p>YOUR DISCOVERY QUEUE</p>
        </div>
        <div>
          <p>LEARN MORE</p>
        </div>
      </div>
      <div className="queue-content">
        <div>
          <img src={queue} alt="queue image" />
        </div>
      </div>
    </div>
  );
};

export default DiscoveryQue;
