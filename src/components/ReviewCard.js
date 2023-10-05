import React from "react";

function ReviewCard({ review }) {
  const { id, name, content } = review;

  return (
    <li style={{ marginBottom: "15px" }}>
      <strong>{name}</strong>
      <br />
      {content}
    </li>
  );
}

export default ReviewCard;
