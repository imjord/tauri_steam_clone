import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { appWindow } from "@tauri-apps/api/window";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faWindowMaximize,
  faBullhorn,
  faEnvelope,
  faUser,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import littleLogo from "../assets/images/little-logo.png";
function Navbar(props) {
  const { getSessionUser, sessionUser, relaunchApp } = props;
  const [active, setActive] = useState(false);
  const [activeLibrary, setActiveLibrary] = useState(false);
  const [activeCommunity, setActiveCommunity] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/logout");
      console.log(response);
      localStorage.removeItem("user");
      relaunchApp();
    } catch (err) {
      //error
      console.error(err);
    }
  };

  const handleUserDropDown = () => {
    setUserDropDown(!userDropDown);
  };

  const setActiveNavbar = () => {
    setActiveLibrary(false);
    setActiveCommunity(false);
    setActiveProfile(false);
    setActive(true);
  };
  const setActiveLibraryNavbar = () => {
    setActive(false);
    setActiveCommunity(false);
    setActiveProfile(false);
    setActiveLibrary(true);
  };
  const setActiveCommunityNavbar = () => {
    setActive(false);
    setActiveProfile(false);
    setActiveLibrary(false);
    setActiveCommunity(true);
  };
  const setActiveProfileNavbar = () => {
    setActive(false);
    setActiveLibrary(false);
    setActiveCommunity(false);
    setActiveProfile(true);
  };
  useEffect(() => {
    getSessionUser();
  }, []);
  return (
    <div className="nav">
      <div data-tauri-drag-region className="help-bar">
        <div data-tauri-drag-region className="left">
          <div className="nav-little">
            <img src={littleLogo} />
            <span>Steam</span>
          </div>

          <p>View</p>
          <p>Friends</p>
          <p>Games</p>
          <p>Help</p>
        </div>
        <div data-tauri-drag-region className="right">
          <p className="nav-icon" title="View news from steam">
            <FontAwesomeIcon className="icon" icon={faBullhorn} />
          </p>
          <p title="View Notifications" className="nav-icon">
            <FontAwesomeIcon className="icon" icon={faBell} />
          </p>
          <p className="guest-box" onClick={() => handleUserDropDown()}>
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div title="Manage Account" className="guest-box-name">
              <p>{sessionUser.username}</p>
            </div>
          </p>
          {userDropDown ? (
            <div className="manage-user-dropdown">
              <div>
                <p>
                  <Link
                    id="dd-profile"
                    to="/profile"
                    onClick={() => handleUserDropDown()}
                  >
                    View my account
                  </Link>
                </p>
              </div>
              <div>
                <p>Account details: {sessionUser.email}</p>
              </div>
              <div>
                <p>Store Prefecense</p>
              </div>
              <div>
                <p>View My wallet</p>
              </div>
              <hr className="hrboi" />
              <div>
                <p>Change account...</p>
              </div>
              <div>
                <p onClick={() => logout()}>Sign out...</p>
              </div>
            </div>
          ) : null}
          <p id="right-hover-box" onClick={() => appWindow.minimize()}>
            _
          </p>
          <p id="right-hover-box">
            <FontAwesomeIcon
              onClick={() => appWindow.maximize()}
              icon={faWindowMaximize}
            />
          </p>
          <p id="right-hover-box" onClick={() => appWindow.close()}>
            X
          </p>
        </div>
      </div>
      <nav>
        <ul>
          <FontAwesomeIcon id="arrow" icon={faArrowLeft} />
          <FontAwesomeIcon id="arrow" icon={faArrowRight} />
          <Link onClick={setActiveNavbar} id="link" to="/home">
            <li className={active ? "active" : null}>STORE</li>
          </Link>
          <Link onClick={setActiveLibraryNavbar} id="link" to="/library">
            <li className={activeLibrary ? "active" : null}>LIBRARY</li>
          </Link>
          <Link onClick={setActiveCommunityNavbar} id="link" to="/community">
            <li className={activeCommunity ? "active" : null}>COMMUNITY</li>
          </Link>
          <Link onClick={setActiveProfileNavbar} id="link" to="/profile">
            <li className={activeProfile ? "active" : null}>
              {sessionUser?.username?.toUpperCase()}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
