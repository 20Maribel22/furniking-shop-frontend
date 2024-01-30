import React from "react";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation__container">
      <ul className="navigation__list">
        <li>
          {" "}
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive && "navigation__link-active"}`
            }
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive && "navigation__link-active"}`
            }
            to="/blog"
          >
            BLOG
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive && "navigation__link-active"}`
            }
            to="/about"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive && "navigation__link-active"}`
            }
            to="/contact-us"
          >
            CONTACT US
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink
            className={({ isActive }) =>
              `navigation__link ${isActive && "navigation__link-active"}`
            }
            to="/feedback"
          >
            FEEDBACK
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
