import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div className="contact-card">
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <h1 className="section__title">Contact Details</h1>
      <ul className="contact-card__list">
        <li className="contact-card__text">
          <b>Shop no :</b> 285 Near Gareto Jalebi Main Murree Road,Rawalpindi
          46000
        </li>
        <li className="contact-card__text">
          <b>Contact :</b>{" "}
        </li>
        <li className="contact-card__text">+92 343 21219243</li>
        <li className="contact-card__text">+92 345 9473703</li>
        <li className="contact-card__text">
          <b>E-mail</b> :
          <span className="contact-card__email">furniking.@gmail.com</span>
        </li>
      </ul>
    </div>
  );
}

export default ContactUs;
