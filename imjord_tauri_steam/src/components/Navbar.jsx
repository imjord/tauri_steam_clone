import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <p className="nav-icon">
            <FontAwesomeIcon className="icon" icon={faBullhorn} />
          </p>
          <p className="nav-icon">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
          </p>
          <p className="guest-box">
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>
              <p>{sessionUser.username}</p>
            </div>
          </p>
          <p onClick={() => appWindow.minimize()}>_</p>
          <p>
            <FontAwesomeIcon
              onClick={() => appWindow.maximize()}
              icon={faWindowMaximize}
            />
          </p>
          <p onClick={() => appWindow.close()}>X</p>
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
