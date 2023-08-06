import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [active, setActive] = useState(false);

  const setActiveNavbar = () => {
    setActive(true);
  };

  return (
    <div>
      <nav>
        <ul>
          <FontAwesomeIcon id="arrow" icon={faArrowLeft} />
          <FontAwesomeIcon id="arrow" icon={faArrowRight} />
          <NavLink
            id="link"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/"
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
