import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AppContext } from "../../context";
import logo from "../../images/Logo.svg";
import user from "../../images/profile-about-mobile-ui-svgrepo-com.svg";
import avatar from "../../images/avatar 1.svg";
import cart from "../../images/cart-svgrepo-com.svg";
import favorite from "../../images/Heart-like.svg";

function Header({ isAuth }) {
  const { currentUser } = useContext(AppContext);

  const style = {
    wordSpacing: "15px",
  };

  return (
    <header className="header">
      <Link className="header-logo" to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <h1 className="header__title">Welcome to our online shop</h1>
      <div style={style} className="header__number-container">
        <div className="header__number-container_small">
          {" "}
          <p className="header__number">0(550)830067</p>
          <p className="header__number">0(777)830067</p>
        </div>{" "}
        <div className="header__number-container_small">
          <p className="header__number">0(708)830067</p>
          <p className="header__number">0(312)836974</p>
        </div>
      </div>
      <div className="header__container">
        {isAuth ? (
          <h2 className="header__list"> Hi,&nbsp;{currentUser.name}!</h2>
        ) : (
          <ul className="header__list">
            <li>
              <Link to="auth/signup" className="header__link">
                Sign up
              </Link>
            </li>
            <span className="header__decor">|</span>
            <li>
              <Link to="auth/signin" className="header__link">
                Login
              </Link>
            </li>
          </ul>
        )}
        <ul className="header__list header__list_mob">
          <li>
            <Link to="/favorite" className="header__link header__link_mob">
              <img className="header__img_mob" src={favorite} alt="Favorite" />
            </Link>
          </li>
          <li>
            <Link to="/cart" className="header__link header__link_mob">
              <img className="header__img_mob" src={cart} alt="Cart" />
            </Link>
          </li>
          {isAuth ? (
            <li>
              <Link to="/auth/me" className="header__link header__link_mob">
                <img
                  className="header__img_mob"
                  title="My account"
                  src={avatar}
                  alt="User"
                />
              </Link>
            </li>
          ) : (
            <li>
              <Link className="header__link header__link_mob" to="auth/signup">
                <img className="header__img_mob" src={user} alt="Auth" />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
