import React from "react";

function PizzaCard({ pizza }) {
  const { id, img, name, price, toppings } = pizza;

  return (
    <div className="pizza-card">
      <h2 className="pizza-name">{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} />
      <p className="pizza-price">{pizza.price}</p>
      <p className="pizza-toppings"> {pizza.toppings} </p>
    </div>
  );
}

export default PizzaCard;
