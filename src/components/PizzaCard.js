import React from "react";
import "../styles/PizzaCard.css";

function PizzaCard({ pizza }) {
  const { id, img, name, price, toppings } = pizza;

  return (
    <div className="card">
      <img src={img} alt={name} style={{ width: "100%" }} />

      <div className="container">
        <h2>{name}</h2>

        <p>{price}</p>

        <p>{toppings}</p>
      </div>
    </div>
  );
}

export default PizzaCard;
