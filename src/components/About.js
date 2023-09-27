import React from "react";
import multiple from "../images/multiple.jpg";

function About() {
  return (
    <div className="about">
      <div
        className="about-top"
        style={{ backgroundImage: `url(${multiple})` }}
      ></div>
      <div className="about-bottom"></div>
    </div>
  );
}

export default About;
