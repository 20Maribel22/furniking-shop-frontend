import React from "react";
import { Link } from "react-router-dom";

import "./Collections.css";
import Baner from "../Baner/Baner";
import { useContext } from "react";
import { AppContext } from "../../context";

function Collections() {
  const { onAddToCart } = useContext(AppContext);

  return (
    <section className="collections">
      <ul className="collections__links">
        <li>
          <Link to="/all-products" className="collections__link">
            All
          </Link>
        </li>
        <li>
          <Link to="/new-arrivals" className="collections__link">
            New Arrivals
          </Link>
        </li>
        <li>
          <Link to="/hot-sale" className="collections__link">
            Hot Sale
          </Link>
        </li>
        <li>
          <Link to="/best-sellers" className="collections__link">
            Best Sellers
          </Link>
        </li>
        <li>
          <Link to="/wardrobes" className="collections__link">
            Wardrobes
          </Link>
        </li>
        <li>
          <Link to="/tables" className="collections__link">
            Tables
          </Link>
        </li>
        <li>
          <Link to="/chairs" className="collections__link">
            Chairs
          </Link>
        </li>
        <li>
          <Link to="/sofas" className="collections__link">
            Sofas
          </Link>
        </li>
        <li>
          <Link to="/mirrors" className="collections__link">
            Mirrors
          </Link>
        </li>
        <li>
          <Link to="/stools" className="collections__link">
            Stools
          </Link>
        </li>
        <li>
          <Link
            to="/benches"
            className="collections__link collections__link_last"
          >
            Benches
          </Link>
        </li>
      </ul>
      <Baner onAddToCart={onAddToCart} />
    </section>
  );
}

export default Collections;
