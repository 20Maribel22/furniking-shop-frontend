import React from "react";
import { useContext } from "react";
import { AppContext } from "../../../context";
import "./HeaderAdmin.css";

function HeaderAdmin({ handleLogout }) {
  const { currentUser } = useContext(AppContext);

  return (
    <div>
      <header className="header">
        <h1 className="header__title">Welcome to admin page</h1>
        <div className="header__container">
          <h2 className="header__list"> Hi,&nbsp;{currentUser.name}!</h2>
          <button
            className="header__exit-button"
            type="button"
            onClick={handleLogout}
          >
            Sign out
          </button>
        </div>
      </header>
    </div>
  );
}

export default HeaderAdmin;
