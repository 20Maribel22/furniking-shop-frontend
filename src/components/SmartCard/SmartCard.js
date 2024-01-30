import React from "react";
import "./SmartCard.css";
import { Link } from "react-router-dom";

function SmartCard() {
  return (
    <div className="delivery">
      <h1 className="delivery__title">Smart Gift Card</h1>
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <ul className="delivery__container">
        <li className="delivery__info">
          <p>
            <b>
              We give a Smart gift card for $100 when buying goods for $1000
            </b>{" "}
          </p>
        </li>
        <li className="delivery__info">
          <p>
            You can also purchase a Smart Gift Card as a gift for your loved
            ones.
          </p>
        </li>
        <li className="delivery__info">
          <p>
            The amount of a Smart Gift Card can be any, it can be used to pay
            both the entire amount of the cost of the goods, and any percentage
            of the cost of the goods
          </p>
        </li>
      </ul>
    </div>
  );
}

export default SmartCard;
