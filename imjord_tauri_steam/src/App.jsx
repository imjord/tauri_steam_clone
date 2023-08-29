import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { appWindow, WebviewWindow } from "@tauri-apps/api/window";
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

// image
import steamLogo from "./assets/images/steamLogo.png";
function App() {
  const [user, setUser] = useState(false);

  const createWindow = async () => {
    const homeView = new WebviewWindow("home", {
      url: "/",
      height: 1100,
      width: 1800,
      decorations: false,
      fullscreen: false,
      resizable: false,
      titleBarStyle: "transparent",
      hiddenTitle: true,
    });
    homeView.once("tauri://created", function () {
      localStorage.setItem("user", true);
      appWindow.close();
    });
    homeView.once("tauri://error", function (e) {
      console.log(e);
    });
  };

  useEffect(() => {
    // invoke tauri to see if theres an existing user instead of local storage...
    if (localStorage.getItem("user")) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="main-window">
        {user ? (
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
          </div>
        ) : (
          <div className="accounts">
            <div data-tauri-drag-region className="accounts-header">
              <div>
                <p onClick={() => appWindow.close()} className="close-account">
                  X
                </p>
              </div>
            </div>
            <div className="accounts-logo">
              <div className="steam-logo">
                <img src={steamLogo} alt="steam-logo" id="steam-logo"></img>
              </div>
              <h1>STEAM</h1>
            </div>
            <div className="accounts-title">
              <h2 data-tauri-drag-region>Who's playing?</h2>{" "}
            </div>
            <div className="accounts-pick">
              <h3>+</h3>
            </div>
            <button onClick={createWindow}>Create</button>
          </div>
        )}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/library" element={<ProjectsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
