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
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import littleLogo from "../assets/images/little-logo.png";
function Navbar(props) {
  const { getSessionUser, sessionUser, relaunchApp } = props;
  const [active, setActive] = useState(false);
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
    setActive(true);
  };
  useEffect(() => {
    getSessionUser();
  }, []);
  return (
    <div className="nav">
      <div data-tauri-drag-region className="help-bar">
        <div data-tauri-drag-region className="left">
          <div className="nav-little">
            {" "}
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
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
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
                  <Link to="/profile" onClick={() => handleUserDropDown()}>
                    {" "}
                    View my account
                  </Link>
                </p>
              </div>
              <div>
                <p>ACcount details: {sessionUser.email}</p>
              </div>
              <div>
                <p>Store Prefecense</p>
              </div>
              <div>
                <p>View My wallet</p>
              </div>
              <hr />
              <div>
                <p>Change account</p>
              </div>
              <div>
                <p onClick={() => logout()}>Sign out</p>
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
          <NavLink
            id="link"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/home"
          >
            {" "}
            <li>STORE</li>{" "}
          </NavLink>
          <NavLink
            id="link"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/library"
          >
            {" "}
            <li>LIBRARY</li>{" "}
          </NavLink>
          <NavLink
            id="link"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/community"
          >
            {" "}
            <li>COMMUNITY</li>{" "}
          </NavLink>
          <NavLink
            id="link"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/profile"
          >
            {" "}
            <li>{sessionUser?.username?.toUpperCase()}</li>{" "}
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
