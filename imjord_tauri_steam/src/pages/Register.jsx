import React, { useState, useEffect } from "react";
import axios from "axios";
import { appWindow, WebviewWindow } from "@tauri-apps/api/window";
import "./Register.css";
const Register = (props) => {
  const { createWindow } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const createUser = async (e) => {
    const mainWindow = WebviewWindow.getByLabel("main");
    e.preventDefault();
    try {
      const newUser = await axios.post(
        "http://localhost:3001/api/users",

        {
          username,
          password,
          email,
        },
        {
          withCredentials: true,
        }
      );
      setSuccessMsg("Registration successful!");
      setUsername("");
      setPassword("");
      setEmail("");
      mainWindow.close();
      createWindow();
    } catch (err) {
      console.error(err);
      setErrorMsg("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <div data-tauri-drag-region className="close-sign-in">
        <p onClick={() => appWindow.close()}> X</p>
      </div>
      <div className="account-creation">
        {errorMsg ? <div className="creation-msg">{errorMsg}</div> : null}

        <div className="creation-title">
          <p>CREATE YOUR ACCOUNT</p>
        </div>
        <div className="creation-form-container">
          <form onSubmit={createUser}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
