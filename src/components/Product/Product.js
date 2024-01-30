import React from "react";
import dislike from "../../images/Heart.svg";
import like from "../../images/heart-green.svg";
import basket from "../../images/shopping-bag-add.svg";
import add from "../../images/add-cart.svg";
import view from "../../images/eye.svg";
import viewClick from "../../images/eye-green.svg";
import { useContext } from "react";
import { AppContext } from "../../context";
import { useState } from "react";

function Product({ product }) {
  const { favorites, onAddToFavorite, onAddToCart, onCardClick, onAddItem } =
    useContext(AppContext);

  const [isView, setIsView] = useState(false);

  const handleClick = () => {
    onCardClick(product);
    setIsView(!isView);
  };

  const onClickPlus = () => {
    onAddToCart(product);
  };

  const onClickFavorite = () => {
    onAddToFavorite(product);
  };
  return (
    <li>
      <div className="trand-card__container">
        <img
          className="trand-card__img"
          src={product.url}
          alt={product.title}
        />
        <h2 className="trand-card__title">{product.name}</h2>
        <h3 className="trand-card__subtitle">{product.title}</h3>
        <div className="trand-card__quantity-container">
          <p>Quantity:</p>
          {product.countInStock > 0 ? (
            <p className="trand-card__quantity">{product.countInStock}</p>
          ) : (
            <span className="trand-card__quantity">unavailable</span>
          )}
        </div>
        <div className="trand-card__text-container">
          <p className="trand-card__text">${product.price}</p>
          <p className="trand-card__text trand-card__text_old">
            ${product.oldPrice}
          </p>
        </div>
        <img
          className="trand-card__info"
          src={product.image}
          alt="information"
        />
        <div className="trand-card__container-btn">
          <button className="trand-card__btn" onClick={onClickFavorite}>
            <img
              src={
                favorites.some((el) => el._id === product._id) ? like : dislike
              }
              alt=""
              title="Add to favorites"
            />
          </button>
          <button className="trand-card__btn">
            <img
              src={onAddItem(product._id) ? add : basket}
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

export default Product;
