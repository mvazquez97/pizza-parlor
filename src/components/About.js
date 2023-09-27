import React from "react";
import pizzaGroup from "../images/multiple.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="about-top"
        style={{ backgroundImage: `url(${pizzaGroup})` }}
      ></div>
      <div className="about-bottom">
        <h1>ABOUT US </h1>
        <p>
          At Manuel's Pizza Parlor, we believe that pizza is more than just a
          meal; it's an experience. Our journey began 2008 with a simple yet
          ambitious mission: to create the best pizza in town while providing a
          warm and welcoming atmosphere for our customers. Today, we're proud to
          say that we've been serving delicious pizza and building memories for
          15 years. Our story is one of passion and dedication. It began with
          Manuel Vazquez, who had a dream of sharing his family's secret pizza
          recipe with the world. What began as a small family-owned pizzeria has
          now blossomed into a beloved community spot, where locals and visitors
          alike come together to savor the flavors of Italy.
        </p>
      </div>
    </div>
  );
}

export default About;
