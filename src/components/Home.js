import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../images/pineapple.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${HomeImage})` }}>
      <div className="headerContainer">
        <h1>Manuel's Pizza Parlor</h1>
        <p>PIZZA PERFECTION IN EVERY SLICE</p>
        <Link to="/menu">
          <button>ORDER NOW!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
