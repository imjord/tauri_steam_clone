import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { appWindow, getCurrent, WebviewWindow } from "@tauri-apps/api/window";

import "./App.css";
import "./SignIn.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import Register from "./pages/Register.jsx";

// image
import steamLogo from "./assets/images/steamLogo.png";
import signInBack from "./assets/images/signin_back.png";
import steam_signin_logo from "./assets/images/steam_signin_logo.png";
import qr from "./assets/images/qr-code.png";
function App() {
  const [sessionUser, setSessionUser] = useState({});
  const [user, setUser] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [registerPage, setRegisterPage] = useState(false);

  const handleRegisterPage = () => {
    setRegisterPage(true);
    signIn(false);
  };

  const getSessionUser = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/user", {
        withCredentials: true,
      });
      console.log(response);
      setSessionUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // start of chatgpt crap to get that slow effect on app intro
  const [animationPaused, setAnimationPaused] = useState(false);
  useEffect(() => {
    const introElement = document.querySelector(".steam-intro");
    introElement.addEventListener(
      "animationiteration",
      handleAnimationIteration
    );

    return () => {
      introElement.removeEventListener(
        "animationiteration",
        handleAnimationIteration
      );
    };
  }, []);

  const handleAnimationIteration = () => {
    setAnimationPaused(true);
    setTimeout(() => {
      setAnimationPaused(false);
    }, 0);
  };
  // end of chatgpt crap

  const handleSignInView = () => {
    setSignIn(!signIn);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // MAIN STEAM WINDOW
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
  // REGISTER WINDOW POP UP
  const createRegisterWindow = () => {
    const registerView = new WebviewWindow("register", {
      url: "/",
      height: 800,
      width: 900,
      decorations: false,
      fullscreen: false,
      resizable: false,
      center: false,
      titleBarStyle: "transparent",
      hiddenTitle: true,
    });
    registerView.once("tauri://created", function () {
      localStorage.setItem("register", true);
    });
    registerView.once("tauri://error", function (e) {
      console.log(e);
    });
  };
  useEffect(() => {
    // invoke tauri to see if theres an existing user instead of local storage...
    if (localStorage.getItem("user")) {
      setUser(true);
      createWindow();
    } else {
      // Close the home window where the main functions are. then open the mainWindow again
      const homeWindow = WebviewWindow.getByLabel("home");
      if (homeWindow) {
        homeWindow.close();
      }
      const webview = new WebviewWindow("main");

      webview.once("tauri://created", function () {
        // webview window successfully created
      });
      webview.once("tauri://error", function (e) {
        // an error happened creating the webview window
      });
    }
    if (localStorage.getItem("register")) {
      setRegisterPage(true);
      localStorage.removeItem("register");
    } else {
      setRegisterPage(false);
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="main-window">
        {registerPage ? (
          <Register createWindow={createWindow} />
        ) : signIn ? (
          <div className="accounts">
            <div data-tauri-drag-region className="close-sign-in">
              <p onClick={() => appWindow.close()}> X</p>
            </div>
            <div className="back-container">
              <img onClick={handleSignInView} src={signInBack}></img>
              <img src={steam_signin_logo} alt="singin-steam-logo"></img>
            </div>
            <div className="form-container">
              <form className="sign-in-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="signin-label" htmlFor="accountName">
                    SIGN IN WITH ACCOUNT NAME
                  </label>
                  <input
                    type="text"
                    id="accountName"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="signin-label-password" htmlFor="password">
                    PASSWORD
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <button type="submit">Sign In</button>
                </div>
              </form>
              <div className="qr">
                <img src={qr} alt="steam-qr"></img>
                <p>This doesnt work just here to look the same</p>
              </div>
            </div>
            <div className="register-signin">
              <p>Help, I can't sign in</p>
              <p>
                Don't have a steam account?
                <span id="create-acc-span" onClick={createRegisterWindow}>
                  Create a Free Account
                </span>
              </p>
            </div>
          </div>
        ) : user ? (
          <div>
            <div className="steam-nav">
              <Navbar
                getSessionUser={getSessionUser}
                sessionUser={sessionUser}
              />
            </div>
          </div>
        ) : (
          <div className="steam-intro">
            <div data-tauri-drag-region className="accounts-header">
              <div>
                <p onClick={() => appWindow.close()} className="close-account">
                  X
                </p>
              </div>
            </div>
            <div
              className={`steam-intro-background ${
                animationPaused ? "paused" : ""
              }`}
            ></div>
            <div className="accounts-logo">
              <div className="steam-logo">
                <img src={steamLogo} alt="steam-logo" id="steam-logo"></img>
              </div>
              <h1 className="steam-title">STEAM</h1>
            </div>
            <div className="accounts-info">
              <div className="accounts-title">
                <h2>Who's playing?</h2>{" "}
              </div>
              <div className="accounts-add">
                <h3 onClick={handleSignInView}>+</h3>
              </div>
            </div>
            {/* <button onClick={createWindow}>Create</button> */}
          </div>
        )}
        <Routes>
          <Route
            path="/home"
            element={<HomePage getSessionUser={getSessionUser} />}
          />
          <Route path="/library" element={<ProjectsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route
            path="/profile"
            element={
              <ProfilePage
                getSessionUser={getSessionUser}
                sessionUser={sessionUser}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
