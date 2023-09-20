import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="bar-container">
      <div className="bar">
        <div className="bar-links">
          <div className="bar-title">
            <h3>Your store</h3>
          </div>
          <div className="bar-title">
            <h3>New & Noteworthy</h3>
          </div>
          <div className="bar-title">
            <h3>Categories</h3>
          </div>
          <div className="bar-title">
            <h3>Points Shop</h3>
          </div>
          <div className="bar-title">
            <h3>News</h3>
          </div>
          <div className="bar-title">
            <h3>Labs</h3>
          </div>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
