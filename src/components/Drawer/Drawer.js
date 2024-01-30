import React, { useEffect } from "react";
import "./Drawer.css";
import InfoDrawer from "../InfoDrawer/InfoDrawer";
import box from "../../images/box.png";
import box2 from "../../images/box2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context";
import { cartApi } from "../../utils/CartApi";

function Drawer({
  onDeleteToCart,
  setCartItems,
  totalPrice,
  addDelivery,
  addPrice,
  plusOneProduct,
  minusOneProduct,
}) {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const { cartItems, currentUser, count } = useContext(AppContext);

  const [isMessage, setIsMessage] = useState("");
  const [statusCart, setStatusCart] = useState("");

  const handleMessage = () => {
    if (statusCart) {
      switch (statusCart) {
        case 401:
          setIsMessage("Please log in!");
          break;
        case 500:
          setIsMessage("Error on the server.");
          break;
        default:
          setIsMessage("An error has occurred.Try later.");
          break;
      }
    }
  };

  useEffect(() => {
    handleMessage();
  }, [statusCart]);



  const onClickOrder = () => {
    const orderData = {
      cartItems: cartItems,
      owner: currentUser,
      subTotal: addPrice,
      delivery: addDelivery,
      totalPrice: totalPrice,
      count: cartItems.length,
    };
    const isOwn = orderData.owner === currentUser;
    if (isOwn) {
      cartApi
        .saveCart(orderData)
        .then((res) => {
          setCartItems([]);
          setIsOrderComplete(true);
        })
        .catch((err) => {
          setStatusCart(err);
        });
    } else {
      setStatusCart("You are not the owner of this order");
    }
  };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="drawer">
      <div className="drawer__container">
        <h2 className="drawer__title">Shopping cart</h2>
        <button className="drawer__btn drawer__btn-main" onClick={goBack}>
          &#215;
        </button>
        {cartItems.length > 0 ? (
        <>
            <div className="drawer__item-container">
              {cartItems.map((item) => {
                return (
                  <div className="drawer__item" key={item._id}>
                    <div className="drawer__main">
                      <img className="drawer__img" src={item.url} alt="" />
                      <div className="drawer__container-text">
                        <p className="drawer__text">{item.name}</p>

                        <b>${item.price * item.count}</b>
                      </div>
                    </div>
                    <div className="drawer__input-container">
                      <button
                        className="drawer__btn drawer__btn_down"
                        onClick={() => minusOneProduct(item._id)}
                      >
                        -
                      </button>
                      <input
                        className="drawer__input"
                        type="text"
                        value={
                          item.count > item.countInStock
                            ? item.countInStock
                            : item.count
                        }
                        onChange={(e) => e.target.value}
                      />
                      <button
                        className="drawer__btn drawer__btn_up"
                        onClick={() => plusOneProduct(item._id)}
                        disabled={item.count >= item.countInStock}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="drawer__btn"
                      onClick={() => onDeleteToCart(item._id)}
                    >
                      &#215;
                    </button>
                  </div>
                );
              })}
            </div>

            <ul className="drawer__list">
              <li className="drawer__info">
                <span className="drawer__info-text">Sub-Total</span>
                <div className="drawer__line"></div>
                <p className="drawer__info-text">
                  <b>{addPrice}$</b>
                </p>
              </li>
              <li className="drawer__info">
                <span className="drawer__info-text">Delivery</span>
                <div className="drawer__line"></div>
                <p className="drawer__info-text">
                  <b>{addPrice >= 1000 ? addDelivery === 0 : addDelivery}$</b>
                </p>
              </li>
              <li className="drawer__info">
                <span className="drawer__info-text">Total payable</span>
                <div className="drawer__line"></div>
                <p className="drawer__info-text">
                  <b>{totalPrice}$</b>
                </p>
              </li>
            </ul>
            <span className="drawer__message">{isMessage}</span>
            <button
              type="button"
              onClick={onClickOrder}
              className="drawer__info-btn"
            >
              Confirm and Pay
            </button>
          </>
        ) : (
          <InfoDrawer
            goBack={goBack}
            title={isOrderComplete ? "Ordered by!" : "Shopping cart is empty"}
            description={
              isOrderComplete
                ? "Your order will soon be transferred to the courier service"
                : "Add at least one product to place an order"
            }
            src={isOrderComplete ? box2 : box}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
