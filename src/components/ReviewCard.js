import React from "react";
import NewReviewForm from "./NewReviewForm";

function ReviewCard({ review }) {
  const { id, name, content } = review;

  return (
    <div className="review-container">
      <NewReviewForm />
    </div>
  );
}

export default ReviewCard;
