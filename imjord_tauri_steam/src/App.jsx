import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { appWindow, getCurrent, WebviewWindow } from "@tauri-apps/api/window";
import { relaunch, exit } from "@tauri-apps/api/process";
import "./App.css";
import "./SignIn.css";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CommunityPage from "./pages/CommunityPage.jsx";
import Register from "./pages/Register.jsx";

// image
import signInBack from "./assets/images/signin_back.png";
import qr from "./assets/images/qr-code.png";

// VAPOR

import vapor_small from "./assets/images/vapor_small.png";

function App() {
  const [sessionUser, setSessionUser] = useState({});
  const [user, setUser] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [registerPage, setRegisterPage] = useState(false);

  // login
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/users/login",
        {
          username: accountName,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
      createWindow();
    } catch (err) {
      console.log(err);
    }
  };

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
      url: "/home",
      height: 960,
      width: 1700,
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
  // relaunch app
  const relaunchApp = async () => {
    const homeWindow = WebviewWindow.getByLabel("home");
    if (homeWindow) {
      await relaunch();
    }
  };
  useEffect(() => {
    // invoke tauri to see if theres an existing user instead of local storage...
    if (localStorage.getItem("user")) {
      setUser(true);
      createWindow();
    } else {
      // Close the home window where the main functions are. then open the mainWindow again

      relaunchApp();
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
      <div className="main-window ">
        {registerPage ? (
          <Register createWindow={createWindow} />
        ) : signIn ? (
          <div className="accounts">
            <div data-tauri-drag-region className="close-sign-in">
              <p onClick={() => appWindow.close()}> X</p>
            </div>
            <div className="back-container">
              <img onClick={handleSignInView} src={signInBack}></img>
              <img
                id="signin-vapor-img"
                src={vapor_small}
                alt="singin-steam-logo"
              ></img>
              <h4>VAPOR</h4>
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
                  <button type="submit" onClick={() => handleLogin()}>
                    Sign In
                  </button>
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
                relaunchApp={relaunchApp}
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
                <img src={vapor_small} alt="vapor-logo" id="steam-logo"></img>
              </div>
              <h1 className="steam-title">VAPOR</h1>
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
