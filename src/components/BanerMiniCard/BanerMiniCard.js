import React from "react";
import "./BanerMiniCard.css";

function BanerMiniCard({ card }) {
  return (
    <li className="baner-card">
      <img className="baner-card__img_min" src={card.url} alt="" />
      <span className="baner-card__price">${card.price}</span>
      <p className="baner-card__name">{card.title}</p>
    </li>
  );
}

export default BanerMiniCard;
