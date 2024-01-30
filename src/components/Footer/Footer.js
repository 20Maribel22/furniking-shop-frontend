import React from "react";
import "./Footer.css";
import logo from "../../images/Logo.svg";
import facebook from "../../images/links/facebook.svg";
import twitter from "../../images/links/twitter.svg";
import instagram from "../../images/links/instagram.svg";
import pinterest from "../../images/links/pinterest.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container-main">
        <ul>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
          <p className="footer__text">
            Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
          </p>
          <nav>
            <ul className="footer__links">
              <li>
                <a
                  className="footer__link"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="footer__img" src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a
                  className="footer__link"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="footer__img" src={twitter} alt="twitter" />
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
                    className="footer__img"
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
                    className="footer__img"
                    src={pinterest}
                    alt="pinterest"
                  />
                </a>
              </li>
            </ul>
          </nav>
        </ul>
        <nav className="footer__container-nav">
          <ul className="footer__list-nav">
            <li className="footer__nav footer__nav_dark">Store</li>
            <li>
              <Link to="/furniture" className="footer__nav">
                Furniture
              </Link>
            </li>
            <li>
              <Link to="/tables" className="footer__nav">
                Tabbles
              </Link>
            </li>
            <li>
              <Link to="/sofas" className="footer__nav">
                Sofas
              </Link>
            </li>
            <li>
              <Link to="/shop" className="footer__nav">
                Other
              </Link>
            </li>
          </ul>
          <ul className="footer__list-nav">
            <li className="footer__nav footer__nav_dark">Supports</li>
            <li>
              <Link to="/feedback" className="footer__nav">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="footer__nav">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/payment" className="footer__nav">
                Payment
              </Link>
            </li>
            <li>
              <Link to="/vacancies" className="footer__nav">
                Vacancies
              </Link>
            </li>
          </ul>
        </nav>
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

export default Footer;
