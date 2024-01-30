import React from "react";
import "./Notification.css";
import { Link } from "react-router-dom";

function Notification() {
  return (
    <div className="notification">
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <h1 className="notification__title">Notification</h1>
      <ul className="notification__text">
        <li>
          New collection! We received a lot of interesting goods! Come, we will
          help you choose the best!
        </li>
        <li>
          Red prices on Black Friday! Only from November 23 to 26, discount up
          to 30% on most of the range. Waiting for you!
        </li>
      </ul>
    </div>
  );
}

export default Notification;
