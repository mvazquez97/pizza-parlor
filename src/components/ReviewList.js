import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList({ reviews }) {
  console.log(reviews);
  const reviewList = reviews.map((review) => (
    <ReviewCard key={review.id} review={review} />
  ));

  return <ul className="cards">{reviewList}</ul>;
}

export default ReviewList;
