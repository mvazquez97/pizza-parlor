import React, { useState } from "react";

function ContactUs() {
  const [pizza, setPizza] = useState([]);

  const addToCart = () => {
    fetch("http://localhost:3000/pizzas", {
      method: "POST",
      headers: {},
    });
  };
  return <div>ContactUs</div>;
}

export default ContactUs;
