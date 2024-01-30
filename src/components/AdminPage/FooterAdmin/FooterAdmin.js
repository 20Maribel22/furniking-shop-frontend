import React from "react";
import logo from "../../../images/Logo.svg";
import facebook from "../../../images/links/facebook.svg";
import twitter from "../../../images/links/twitter.svg";
import instagram from "../../../images/links/instagram.svg";
import pinterest from "../../../images/links/pinterest.svg";
import "./FooterAdmin.css";
import { Link } from "react-router-dom";

function FooterAdmin() {
  return (
    <footer className="footer footer__admin">
      <div className="footer__container-admin">
        <ul>
        <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
          <p className="footer__text">
            Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <nav></nav>
        </ul>
        <nav className="footer__container-nav_admin">
          <ul className="footer__links">
            <li>
              <a
                className="footer__link"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer__img footer__img_admin"
                  src={facebook}
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer__img footer__img_admin"
                  src={twitter}
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer__img footer__img_admin"
                  src={instagram}
                  alt="instagram"
                />
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://pinterest.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="footer__img footer__img_admin"
                  src={pinterest}
                  alt="pinterest"
                />
              </a>
            </li>
          </ul>
        </nav>
        <ul className="footer__list-admin">
          <h3 className="footer__text">
            <b>Administrator technical support</b>
          </h3>
          <li className="footer__num">+996555112987</li>
          <li className="footer__num">+996708112987</li>
          <li className="footer__num">+996777112987</li>
        </ul>
      </div>
      <span className="footer__line"></span>
      <div className="footer__container-info">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Funking - All rights reserved.
        </p>
        <ul className="footer__list-info">
          <li className="footer__info">Privacy</li>
          <li className="footer__info">Security</li>
          <li className="footer__info">Terms</li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterAdmin;
