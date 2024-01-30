import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { AppContext } from "../../context";

function Header({ isAuth }) {
  const { currentUser } = useContext(AppContext);

  const style = {
    wordSpacing: "15px",
  };

  return (
    <div>
      <header className="header">
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
        </div>
      </header>
    </div>
  );
}

export default Header;
