import React from "react";
import "./Payment.css";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div className="payment">
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <h1 className="payment__title">13 payment methods for ordering goods</h1>
      <ul className="payment__list">
        <li className="payment__link">
          <b>Cash:</b>
        </li>
        <li className="payment__link"> - Cash payment</li>
        <li className="payment__link">
          <b>Bank cards:</b>
        </li>
        <li className="payment__link">
          {" "}
          - By bank card on the website (Visa, Mastercard, Elcard)
        </li>
        <li className="payment__link">
          {" "}
          - By bank card upon receipt (Visa, Elcard, Mastercard, Maestro,
          UnionPay, MIR)
        </li>
        <li className="payment__link">
          <b>Mobile banking:</b>
        </li>
        <li className="payment__link"> - MBANK</li>
        <li className="payment__link"> - Optima24</li>
        <li className="payment__link">
          <b>Electronic wallets:</b>
        </li>
        <li className="payment__link"> - ELSOM</li>
        <li className="payment__link">
          <b>Credit:</b>
        </li>
        <li className="payment__link">- Loan on site</li>
        <li className="payment__link">- Online loan</li>
        <li className="payment__link">
          <b>Money transfer systems:</b>
        </li>
        <li className="payment__link">- Republican money transfer systems</li>
        <li className="payment__link">
          - International money transfer systems
        </li>
        <li className="payment__link">
          <b>Cashless payments:</b>
        </li>
        <li className="payment__link">- Cashless payment by bank transfer</li>
        <li className="payment__link">- Gift Certificate</li>
        <li className="payment__link">
          - Letter of guarantee (for organizations)
        </li>
        <span>
          For more accurate information, please contact our consultants at{" "}
          <b>+996550830067 </b>or <b>+996777830067</b>
        </span>
      </ul>
    </div>
  );
}

export default Payment;
