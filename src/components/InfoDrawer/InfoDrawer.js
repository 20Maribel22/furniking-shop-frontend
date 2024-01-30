import React from "react";
import "./InfoDrawer.css";

function infoDrawer({ src, title, description, goBack }) {
  return (
    <div className="drawer__container-empty">
      <img className="drawer__img-empty" src={src} alt="box" />
      <h3 className="drawer__title">{title}</h3>
      <p className="drawer__info-text">{description}</p>
      <button className="drawer__info-btn" onClick={goBack}>
        Go back
      </button>
    </div>
  );
}

export default infoDrawer;
