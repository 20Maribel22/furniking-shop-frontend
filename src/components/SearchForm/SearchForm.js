import React from "react";
import "./SearchForm.css";
import logo from "../../images/Logo.svg";
import avatar from "../../images/avatar 1.svg";
import notification from "../../images/Notification.svg";
import basket from "../../images/icon shop.svg";
import favorite from "../../images/Heart-like.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../context";
import { useContext } from "react";
import { useEffect } from "react";

function SearchForm({ totalPrice }) {
  const { searchItems, setSearchItems } = useContext(AppContext);
  const location = useLocation();

  const navigate = useNavigate();

  const handleChangeInput = (event) => {
    if (location.pathname !== "/all-products") {
      navigate("/all-products");
    }
    setSearchItems(event.target.value);
  };

  useEffect(() => {
    if (location.pathname !== "/all-products") {
      setSearchItems("");
    }
  }, [location.pathname]);

  return (
    <section className="search">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <form className="search__form" name="search">
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            name="search"
            placeholder="Search here"
            required
            onChange={handleChangeInput}
            value={searchItems}
            maxLength="250"
            minLength="1"
          />
          {searchItems ? (
            <button
              className="search__button-del"
              onClick={() => setSearchItems("")}
            >
              x
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
      <div className="search__img-container">
        <div className="search__bascet-container">
          <Link to="/cart">
            <img
              className="search__img"
              title="Shopping cart"
              src={basket}
              alt=""
            />
          </Link>
          <p className="search__info">${totalPrice}</p>
        </div>
        <Link to="/favorite" className="search__img">
          <img title="Add to favorite product" src={favorite} alt="" />
        </Link>
        <Link to="/notification" className="search__img">
          <img title="Notification" src={notification} alt="" />
        </Link>
        <Link to="/auth/me" className="search__img">
          <img title="My account" src={avatar} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default SearchForm;
