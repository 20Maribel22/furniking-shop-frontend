import React from "react";
import "./ImagePopup.css";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup ${card.url ? "popup_opened" : ""}`}>
      <div className="popup__img-container">
        <button
          type="button"
          className="popup__btn-close"
          onClick={onClose}
        ></button>
        <div className="popup__description">
          <img className="popup__img" src={card.url} alt="" />
          <h3 className="popup__title">{card.name}</h3>
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
