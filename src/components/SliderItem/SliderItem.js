import React from "react";
import "./SliderItem.css";

function SliderItem({ p, stopSlide, startSlide }) {
  return (
    <div className="slide__item">
      <img className="feedback-card__img" src={p.photo} alt={p.name} />
      <p className="feedback-card__text">{p.comment}</p>
      <h2 className="feedback-card__title">{p.name}</h2>
      <p className="feedback-card__info">{p.status}</p>
    </div>
  );
}

export default SliderItem;
