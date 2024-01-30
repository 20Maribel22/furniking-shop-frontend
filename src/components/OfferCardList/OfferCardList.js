import React from "react";
import "./OfferCardList.css";
import OfferCard from "../OfferCard/OfferCard";

function OfferCardList() {
  return (
    <section  className="offer-cards">
      <ul className="offer-cards__list">
        <OfferCard />
      </ul>
    </section>
  );
}

export default OfferCardList;
