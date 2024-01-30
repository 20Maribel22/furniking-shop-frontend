import React from "react";
import "./SpecialOfferCard.css";
import Countdown from "../Countdown/Countdown";

function SpecialOfferCard({ card }) {
  return (
    <li className="special-card">
      <img className="special-card__img" src={card.url} alt={card.name} />
      <div className="special-card__description">
        <h2 className="special-card__title">{card.name}</h2>
        <h3 className="special-card__subtitle">{card.title}</h3>
        <div className="special-card__text-container">
          <p className="special-card__text">${card.price}</p>
          <p className="special-card__text special-card__text_old">
            ${card.oldPrice}
          </p>
        </div>
        <div className="special-card__date">
          <Countdown />
        </div>
      </div>
      <img className="special-card__info" src={card.image} alt="information" />
    </li>
  );
}

export default SpecialOfferCard;
