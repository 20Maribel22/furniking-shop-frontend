import React from "react";
import "./SpecialOfferCardList.css";
import SpecialOfferCard from "../SpecialOfferCard/SpecialOfferCard";
import { specialOfferCards } from "../../utils/data";
import { useContext } from "react";
import { AppContext } from "../../context";

function SpecialOfferCardList() {

  // const {onAddToCart} = useContext(AppContext)
  
  return (
    <section id="special" className="special-cards">
      <h2 className="section__title section__title_special">SPECIAL OFFER</h2>
      <ul className="special-cards__list">
        {specialOfferCards.map((card) => (
          <SpecialOfferCard card={card} key={card.id} />
        ))}
      </ul>
    </section>
  );
}

export default SpecialOfferCardList;
