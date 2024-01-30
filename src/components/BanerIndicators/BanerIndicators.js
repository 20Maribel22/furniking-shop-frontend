import React from "react";
import "./BanerIndicators.css";

function BanerIndicators({ baner, currentSlide }) {
  return (
    <div className="baner-indicators">
      {baner.map((_, index) => (
        <button
          key={index}
          className={`baner-indicator__item${
            currentSlide === index ? " active" : ""
          }`}
        ></button>
      ))}
    </div>
  );
}

export default BanerIndicators;
