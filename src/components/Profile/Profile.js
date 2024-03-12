import React, { useContext } from "react";
import "./Profile.css";
import { AppContext } from "../../context";
import avatar from "../../images/avatar 1.svg";
import basket from "../../images/icon shop.svg";
import shipping from "../../images/free-delivery 1.svg";
import favorite from "../../images/Heart-like.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { cartApi } from "../../utils/CartApi";

function Profile({ handleLogout }) {
  const { currentUser, favorites } = useContext(AppContext);

  const [orders, setOrders] = useState([]);
  const [isMessage, setIsMessage] = useState("");

  useEffect(() => {
    cartApi
      .getOrdersAll()
      .then((data) => {
        const filteredOrders = data.filter(
          (order) => order.owner._id === currentUser._id
        );
        setOrders(filteredOrders);

        if (filteredOrders.length === 0) {
          setIsMessage("Please place an order!");
        } else {
          setIsMessage("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section className="profile">
        <Link className="shop-page__btn" to="/">
          Home
        </Link>
        <div className="profile__container">
          <div className="profile__container_small">
            <div className="profile__container_img">
              <h1 className="profile__title">Profile</h1>
              <img className="profile__img" src={avatar} alt="avatar" />
            </div>
            <p className="profile__info">{currentUser.name}</p>
            <p className="profile__info">
              <b>E-mail</b> :
              <span className="profile__email">&#160;{currentUser.email}</span>
            </p>
            <p className="profile__info">
              <b>Phone</b> :
              <span className="profile__email">&#160;{currentUser.phone}</span>
            </p>
          </div>
          <div className="profile__container_small">
            <div className="profile__container_img">
              <h1 className="profile__link">Delivery</h1>
              <Link className="profile__link" to="/delivery">
                <img className="profile__img" src={shipping} alt="avatar" />
              </Link>
            </div>
            <p className="profile__info">Order: {orders.length}</p>
          </div>
          <div className="profile__container_small">
            <div className="profile__container_img">
              <h1 className="profile__link">Favorite</h1>
              <Link className="profile__link" to="/favorite">
                <img className="profile__img" src={favorite} alt="like" />
              </Link>
            </div>
            <p className="profile__info">Goods: {favorites.length}</p>
          </div>
          <div className="profile__container_small">
            <div className="profile__container_img">
              <h1 className="profile__link">Shopping cart</h1>
              <Link className="profile__link" to="/cart">
                <img className="profile__img" src={basket} alt="avatar" />
              </Link>
            </div>
          </div>
        </div>
        <h2 className="profile__link">My orders:</h2>
        <ul className="shop__list">
          {orders.map((order) => (
            <li key={order._id}>
              <div className="trand-card__container">
                {order.cartItems.map((item) => (
                  <React.Fragment key={item._id}>
                    <Link className="shop__link" to="/all">
                      <img
                        className="trand-card__img"
                        src={item.url}
                        alt={item.title}
                      />
                    </Link>
                    <h2 className="trand-card__title">{item.name}</h2>
                    <h3 className="trand-card__subtitle">{item.title}</h3>
                    <div className="trand-card__text-container">
                      <p className="trand-card__text">${item.price}</p>
                      <p className="trand-card__text trand-card__text_old">
                        {item.oldPrice}
                      </p>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <span className="drawer__message">{isMessage}</span>
        <button
          className="profile__exit-button"
          type="button"
          onClick={handleLogout}
        >
          Sign out
        </button>
      </section>
    </>
  );
}

export default Profile;
