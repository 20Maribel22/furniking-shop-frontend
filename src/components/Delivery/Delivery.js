import React from "react";
import "./Delivery.css";
import { Link } from "react-router-dom";

function Delivery() {
  return (
    <div className="delivery">
      <h1 className="delivery__title">Delivery and assembly</h1>
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <ul className="delivery__container">
        <li className="delivery__info">
          <p>
            <b>
              When buying in the amount of $ 1000, delivery in the city is free!
            </b>{" "}
            Assembly and installation of furniture is also free of charge!
          </p>
        </li>
        <li className="delivery__info">
          <p>
            For purchases under $1,000, citywide shipping will be 3% of the
            purchase price.
          </p>
        </li>
        <li className="delivery__info">
          <p>
            At your own request, you can take the furniture out of the store
            yourself. In this case, if necessary, you will be provided with free
            furniture assembly services at a convenient time for him.
          </p>
        </li>
        <li className="delivery__info">
          <p>
            Delivery to other locations around the country is made on certain
            days of the week and is paid in accordance with the price list.
            Assembly and installation of furniture are free of charge! You pay
            only the cost of travel expenses.
          </p>
        </li>
        <li className="delivery__info">
          <p>
            Delivery and assembly date is negotiable. You will be notified in
            advance that the ordered furniture is shipped from the warehouse and
            how long it will take to be delivered to the specified address.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Delivery;
