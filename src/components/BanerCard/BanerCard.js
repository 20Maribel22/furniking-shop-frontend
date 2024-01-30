import React from "react";
import "./BanerCard.css";
import rectangle from "../../images/baner/rectangle.svg";
import { trand } from "../../utils/data";
import BanerMiniCard from "../BanerMiniCard/BanerMiniCard";

function BanerCard({ b }) {
  return (
    <div className="baner-card__item">
      <div className="baner-card__container">
        <div className="baner-card__description">
          <p className="baner-card__text">{b.name}</p>
          <h2 className="baner-card__title">{b.title}</h2>
          <span className="baner-card__line">
            <img src={rectangle} alt="" />
          </span>
          <p className="baner-card__info">{b.text}</p>
        </div>
        <img className="baner-card__img" src={b.url} alt="" />
        <ul className="baner-card__list">
          {trand.map((card) => (
            <BanerMiniCard card={card} key={card.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BanerCard;
