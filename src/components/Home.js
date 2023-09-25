import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="header-container">
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
