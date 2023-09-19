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
function Navbar(props) {
  const { getSessionUser, sessionUser } = props;
  const [active, setActive] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const handleUserDropDown = () => {
    setUserDropDown(!userDropDown);
  };

  const setActiveNavbar = () => {
    setActive(true);
  };
  useEffect(() => {
    getSessionUser();
  });
  return (
    <div>
      <div data-tauri-drag-region className="help-bar">
        <div data-tauri-drag-region className="left">
          <p>Steam</p>
          <p>View</p>
          <p>Friends</p>
          <p>Games</p>
          <p>Help</p>
        </div>
        <div data-tauri-drag-region className="right">
          <p className="nav-icon" data-title="View news from steam">
            <FontAwesomeIcon className="icon" icon={faBullhorn} />
          </p>
          <p data-title="View Notifications" className="nav-icon">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
          </p>
          <p className="guest-box" onClick={() => handleUserDropDown()}>
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div data-title="Manage Account" className="guest-box-name">
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
                <p>Sign out</p>
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
            <li>PROFILE</li>{" "}
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
