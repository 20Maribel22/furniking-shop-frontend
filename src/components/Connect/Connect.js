import React from "react";
import "./Connect.css";
import { Link } from "react-router-dom";

function Connect() {
  return (
    <div className="payment">
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <h1 className="payment__title">Support</h1>

      <ul className="payment__list">
        <li className="payment__link">
          <b>To buyers and clients:</b>
        </li>
        <li className="payment__link">--0(312)836974</li>
        <li className="payment__link">--0(550)830067</li>
        <li className="payment__link">
          --0(777)830067 <span className="connect__email">WhatsApp</span>
        </li>
        <li className="payment__link">--0(708)830067</li>
        <li className="payment__link">
          E-mail: <span className="connect__email">support@furniking.com</span>
        </li>
        <li className="payment__link">
          <b>
            <span className="connect__link">
              For complaints and suggestions (not for orders and consultations):
            </span>
          </b>
        </li>
        <li className="payment__link">
          --0(777)832837{" "}
          <span className="connect__email">
            WhatsApp(written or voice messages only)
          </span>
        </li>
        <li className="payment__link">
          E-mail: <span className="connect__email">feedback@furniking.com</span>
        </li>
        <li className="payment__link">
          <b>For corporate clients and legal entities:</b>
        </li>
        <li className="payment__link">--0(708)597268</li>
        <li className="payment__link">
          E-mail:{" "}
          <span className="connect__email">corporate@furniking.com</span>
        </li>
        <li className="payment__link">
          <b>To companies for marketing offers:</b>
        </li>
        <li className="payment__link">
          E-mail:{" "}
          <span className="connect__email">marketing@furniking.com</span>
        </li>
        <span>
          For more accurate information, please contact our consultants at{" "}
          <b>+996550830067 </b>or <b>+996777830067</b>
        </span>
      </ul>
    </div>
  );
}

export default Connect;
