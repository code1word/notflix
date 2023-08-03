import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import notflix from "../notflix.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginscreen">
      <div className="loginscreen_background">
        <img
          className="loginscreen_logo"
          src={notflix}
          alt=""
          onClick={() => setSignIn(false)}
        />
        <button onClick={() => setSignIn(true)} className="loginscreen_button">
          Sign In
        </button>
        <div className="loginscreen_gradient"></div>
      </div>
      <div className="loginscreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <div style={{ marginTop: "75px" }}>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel any time.</h2>
            <h3>Ready to watch? Click to create or restart your membership.</h3>
            <div className="loginscreen_input">
              <form>
                <button
                  onClick={() => setSignIn(true)}
                  className="loginscreen_getstarted"
                >
                  GET STARTED <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
