import React from "react";
import "./TrandCard.css";
import dislike from "../../images/Heart.svg";
import like from "../../images/heart-green.svg";
import basket from "../../images/shopping-bag-add.svg";
import add from "../../images/add-cart.svg";
import view from "../../images/eye.svg";
import viewClick from "../../images/eye-green.svg";
import { useContext } from "react";
import { AppContext } from "../../context";
import { useState } from "react";

function TrandCardBest({ card }) {
  const { favorites, onAddToFavorite, onAddToCart, onCardClick, onAddItem } =
    useContext(AppContext);

  const [isView, setIsView] = useState(false);

  const handleClick = () => {
    onCardClick(card);
    setIsView(!isView);
  };

  const onClickPlus = () => {
    onAddToCart(card);
  };

  const onClickFavorite = () => {
    onAddToFavorite(card);
  };

  return (
    <li>
      <div className="trand-card__container">
        <img className="trand-card__img" src={card.url} alt={card.title} />
        <h2 className="trand-card__title">{card.name}</h2>
        <h3 className="trand-card__subtitle">{card.title}</h3>
        <div className="trand-card__quantity-container">
          <p>Quantity:</p>
          {card.countInStock > 0 ? (
            <p className="trand-card__quantity">{card.countInStock}</p>
          ) : (
            <span className="trand-card__quantity">unavailable</span>
          )}
        </div>
        <div className="trand-card__text-container">
          <p className="trand-card__text">${card.price}</p>
          <p className="trand-card__text trand-card__text_old">
            ${card.oldPrice}
          </p>
        </div>
        <img className="trand-card__info" src={card.image} alt="information" />
        <div className="trand-card__container-btn">
          <button className="trand-card__btn" onClick={onClickFavorite}>
            <img
              src={favorites.some((el) => el._id === card._id) ? like : dislike}
              alt=""
              title="Add to favorites"
            />
          </button>
          <button className="trand-card__btn">
            <img
              src={onAddItem(card._id) ? add : basket}
              alt=""
              title="Add to cart"
              onClick={onClickPlus}
            />
          </button>
          <button className="trand-card__btn">
            <img
              src={isView ? viewClick : view}
              alt=""
              title="View details"
              onClick={handleClick}
            />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TrandCardBest;
