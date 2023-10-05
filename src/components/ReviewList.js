import React from "react";
import ReviewCard from "./ReviewCard";
import NewReviewForm from "./NewReviewForm";

function ReviewList({ reviews, onAddNewReview }) {
  console.log(reviews);
  const reviewList = reviews.map((review) => (
    <ReviewCard key={review.id} review={review} />
  ));

  return (
    <>
      <NewReviewForm onAddNewReview={onAddNewReview} />
      <ul style={{ listStyleType: "none" }}>{reviewList}</ul>
    </>
  );
}

export default ReviewList;
