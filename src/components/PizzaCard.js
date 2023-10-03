import React from "react";
import "../styles/PizzaCard.css";

function PizzaCard({ pizza }) {
  const { id, img, name, price, toppings } = pizza;

  return (
    <div className="pizza-container">
      <div className="image-container">
        <img src={pizza.img} alt={pizza.name} />
      </div>

      <div className="pizza-content">
        <div className="pizza-name">
          <h2>{pizza.name}</h2>
        </div>
        <div className="pizza-price">
          <p>{pizza.price}</p>
        </div>
        <div className="pizza-toppings">
          <p>{pizza.toppings}</p>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
