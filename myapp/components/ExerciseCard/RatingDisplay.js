import React from "react";
import { FaDumbbell } from "react-icons/fa";

const RatingDisplay = ({ rating }) => {
  const maxRating = 5;
  const filledDumbbellColor = "text-yellow-500";
  const emptyDumbbellColor = "text-gray-300";
  return (
    <div className="flex justify-start align-baseline gap-2">
      {[...Array(maxRating)].map((_, index) => (
        <div key={index} className="flex-col items-center flex">
          <FaDumbbell
            className={`${
              index < rating ? filledDumbbellColor : emptyDumbbellColor
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default RatingDisplay;
