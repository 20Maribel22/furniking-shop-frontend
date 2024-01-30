import React from "react";
import { Link } from "react-router-dom";
import "./All.css";

function All() {
  return (
    <div className="all-products">
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <h1 className="section__title">ALL COLLECTIONS</h1>
      <div className="all-products__container">
        <ul className="all-products__container__links">
          <li>
            <Link to="/all-products" className="all-products__container__link">
              All Products
            </Link>
          </li>
          <li>
            <Link to="/new-arrivals" className="all-products__container__link">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link to="/hot-sale" className="all-products__container__link">
              Hot Sale
            </Link>
          </li>
          <li>
            <Link to="/best-sellers" className="all-products__container__link">
              Best Sellers
            </Link>
          </li>
          <li>
            <Link to="/wardrobes" className="collections__link">
              Wardrobes
            </Link>
          </li>
          <li>
            <Link to="/tables" className="all-products__container__link">
              Tables
            </Link>
          </li>
          <li>
            <Link to="/chairs" className="all-products__container__link">
              Chairs
            </Link>
          </li>
          <li>
            <Link to="/sofas" className="all-products__container__link">
              Sofas
            </Link>
          </li>
          <li>
            <Link to="/mirrors" className="all-products__container__link">
              Mirrors
            </Link>
          </li>
          <li>
            <Link to="/tools" className="all-products__container__link">
              Stools
            </Link>
          </li>
          <li>
            <Link
              to="/benches"
              className="all-products__container__link all-products__container__link_last"
            >
              Benches
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default All;
