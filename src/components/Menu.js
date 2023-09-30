import React from "react";
import PizzaCard from "./PizzaCard";

function Menu({ pizzas }) {
  console.log(pizzas);

  const pizzaList = pizzas.map((pizza) => (
    <PizzaCard key={pizza.id} pizza={pizza} />
  ));

  return (
    <div className="menu">
      <h1>Our Delicious Menu</h1>
      <div className="menu-list">{pizzaList}</div>
    </div>
  );
}

export default Menu;
