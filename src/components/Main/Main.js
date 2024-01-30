import React from "react";
import OfferCardList from "../OfferCardList/OfferCardList";
import TrandCardList from "../TrandCardList/TrandCardList";
import SpecialOfferCardList from "../SpecialOfferCardList/SpecialOfferCardList";
import Products from "../Products/Products";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import Articles from "../Articles/Articles";
import Menu from "../Menu/Menu";
import Collections from "../Collections/Collections";
import NavTab from "../NavTab/NavTab";

function Main({ onCardClick, cartItems,onAddItem }) {
  return (
    <section className="main">
      <NavTab />
      <Collections/>
      <Menu />
      <OfferCardList />
      <TrandCardList
        onCardClick={onCardClick}
        onAddItem={onAddItem}
        cartItems={cartItems}
      />
      <SpecialOfferCardList />
      <Products onCardClick={onCardClick} />
      <FeedbackCard />
      <Articles />
    </section>
  );
}

export default Main;
