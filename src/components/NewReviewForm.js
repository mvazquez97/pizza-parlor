import React, { useState } from "react";

function NewReviewForm() {
  const [reviewData, setReviewData] = useState({
    name: "",
    content: "",
  });

  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.name === "content") {
      setReviewData({
        ...reviewData,
        [e.target.name]: e.target.value,
      });
    } else {
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    };

    fetch("http://localhost:3001/reviews", configObj);
    .then(r => r.json())
    .then(console.log)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your review:
        <input
          type="text"
          name="name"
          value={reviewData.name}
          placeholder="Your name"
          onChange={(e) => setReviewData(e.target.value)}
        />
        {/* <input
          type="text"
          name="content"
          value={reviewData.content}
          placeholder="Type your review"
          onChange={handleChange}
        /> */}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewReviewForm;
