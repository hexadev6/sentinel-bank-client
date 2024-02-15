import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const CustomRating = ({ rating }) => {
  const stars = [];
  const negetiveStar = 5 - rating;
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i + 2} className="text-nevy-blue" />); // Unicode character for a star
  }

  for (let i = 0; i < negetiveStar; i++) {
    stars.push(<FaRegStar key={i + 1} className="text-light-gray" />); // Unicode character for a star
  }
  return stars;
};

export default CustomRating;
