import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profilescreen">
      <Nav />
      <div className="profilescreen_body">
        <h1>Edit Profile</h1>
        <div className="profilescreen_info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt=""
          />
          <div className="profilescreen_details">
            <h2>Email Address: {user.email}</h2>
            <div className="profilescreen_plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profilescreen_signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
