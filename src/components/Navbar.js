import React from "react";
import PizzaLogo from "../images/FreeVector-Pizza-Logo-Template.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-side">
        <img src={PizzaLogo} alt="logo" />
      </div>
      <div className="right-side">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
