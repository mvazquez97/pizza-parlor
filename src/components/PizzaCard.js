import React from "react";

function PizzaCard({ pizza }) {
  const { id, img, name, price, toppings } = pizza;

  return (
    <div className="pizza-card">
      <h2 className="pizza-name">{name}</h2>
      <img src={img} alt={name} />
      <p className="pizza-price">{price}</p>
      <p className="pizza-toppings">{toppings}</p>
    </div>
  );
}

export default PizzaCard;
