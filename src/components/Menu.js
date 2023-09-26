import React from "react";
import { pizzas } from "./data/db.json";

function Menu() {
  return (
    <div className="menu">
      <h1>Our Delicious Menu</h1>
      <div className="menu-list"></div>
    </div>
  );
}

export default Menu;
