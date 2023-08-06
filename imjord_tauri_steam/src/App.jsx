import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { appWindow } from "@tauri-apps/api/window";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  faWindowMaximize,
  faBullhorn,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CommunityPage from "./pages/CommunityPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="main-window">
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
                <p>guest</p>
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
        <div className="steam-nav">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/library" element={<ProjectsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
