import React, { useState, useEffect } from "react";
import PizzaLogo from "../images/FreeVector-Pizza-Logo-Template.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    fetch("")
      .then((r) => r.json())
      .then(console.log);
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="left-side" id={showLinks ? "open" : "close"}>
        <img src={PizzaLogo} alt="logo" />
        <div className="hidden-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="right-side">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleLinks}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
