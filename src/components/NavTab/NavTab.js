import React from "react";
import "./NavTab.css";
import btn__group from "../../images/btn-group.png";
import btn__green from "../../images/btn-group-green.svg";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function NavTab() {
  return (
    <section className="navtab">
      <div className="navtab__menu">
        <Link to="/shop" className="navtab__link">
          <button className="navtab__btn-all">
            <img className="navtab__img" src={btn__group} alt="" />
            <img className="navtab__img_green" src={btn__green} alt="" />
            <h6 className="navtab__title">ALL COLLECTIONS</h6>
          </button>
        </Link>
        <Navigation />
      </div>
    </section>
  );
}

export default NavTab;
