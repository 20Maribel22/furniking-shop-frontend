import React from "react";
import "./OfferCard.css";
import offer__one from "../../images/offer1.png";
import offer__two from "../../images/offer2.png";
import offer__three from "../../images/offer3.png";
import { Link } from "react-router-dom";

function OfferCard() {
  return (
    <>
      <li className="offer-card">
        <img className="offer-card__img" src={offer__one} alt="Offer" />
        <div className="offer-card__description">
          <h2 className="offer-card__title">Modern Furniture Collections</h2>
          <p className="offer-card__text">Starting from $500</p>
          <Link to="/hot-sale" className="offer-card__link">
            <p>Read more &#129046;</p>
          </Link>
        </div>
      </li>
      <div>
        <li className="offer-card">
          <img
            className="offer-card__img offer-card__img_small"
            src={offer__two}
            alt="Offer"
          />
          <div className="offer-card__description">
            <h2 className="offer-card__title offer-card__title_small">
              Geometric Bookcase
            </h2>
            <p className="offer-card__text">Up to 20% discount</p>
            <Link to="/hot-sale" className="offer-card__link">
              <p>Read more &#129046;</p>
            </Link>
          </div>
        </li>
        <li className="offer-card">
          <img
            className="offer-card__img offer-card__img_small"
            src={offer__three}
            alt="Offer"
          />
          <div className="offer-card__description">
            <h2 className="offer-card__title offer-card__title_small">
              Minimal Sofa collections
            </h2>
            <p className="offer-card__text">Sale upto 40% discount</p>
            <Link to="/hot-sale" className="offer-card__link">
              <p>Read more &#129046;</p>
            </Link>
          </div>
        </li>
      </div>
    </>
  );
}

export default OfferCard;
