import React from "react";
import "./TooSmallScreen.css";
import sad from "../sad.png";

function TooSmallScreen() {
  return (
    <div className="toosmallscreen_body">
      Sorry! Your screen is too small to view this content.
      <div className="sad_face">
        <img src={sad} alt="" />
      </div>
    </div>
  );
}

export default TooSmallScreen;
