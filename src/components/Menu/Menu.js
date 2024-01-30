import React from "react";
import "./Menu.css";
import shipping from "../../images/free-delivery 1.svg";
import gift__card from "../../images/Page-1.svg";
import payment from "../../images/wallet 1.png";
import connect from "../../images/support 1.svg";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <section className="menu">
      <Link to="/delivery" className="menu__button">
        <img className="menu__img" src={shipping} alt="" />
        <div className="menu__description">
          <h2 className="menu__title">Free Shipping</h2>
          <p className="menu__text">Orders over $1000</p>
        </div>
      </Link>
      <Link to="/smart-card" className="menu__button">
        <img className="menu__img" src={gift__card} alt="" />
        <div className="menu__description">
          <h2 className="menu__title">Smart Gift Card</h2>
          <p className="menu__text">Buy $1000 to get card</p>
        </div>
      </Link>
      <Link to="/payment" className="menu__button">
        <img className="menu__img" src={payment} alt="" />
        <div className="menu__description">
          <h2 className="menu__title">Quick Payment</h2>
          <p className="menu__text">100% secure payment</p>
        </div>
      </Link>
      <Link to="/connect" className="menu__button">
        <img className="menu__img" src={connect} alt="" />
        <div className="menu__description">
          <h2 className="menu__title">24/7 Support</h2>
          <p className="menu__text">Quick support</p>
        </div>
      </Link>
    </section>
  );
}

export default Menu;
