import React, { useState } from "react";

function NewReviewForm({ onAddNewReview }) {
  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("http://localhost:3001/reviews", configObj)
      .then((r) => r.json())
      .then((newReview) => onAddNewReview(newReview));
    setFormData({
      name: "",
      content: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your review:
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          value={formData.content}
          placeholder="Type your review"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewReviewForm;
