import React from "react";
import PizzaLogo from "../images/FreeVector-Pizza-Logo-Template.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-side">
        <img src={PizzaLogo} alt="logo" />
      </div>
      <div className="right-side"></div>
    </div>
  );
}

export default Navbar;
