import React from "react";

function PizzaCard({ pizza }) {
  const { id, img, name, price, toppings } = pizza;

  return (
    <div className="pizza-card">
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.price}</p>
    </div>
  );
}

export default PizzaCard;
