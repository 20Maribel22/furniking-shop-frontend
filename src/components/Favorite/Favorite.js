import "./Favorite.css";
import smile from "../../images/smile.png";
import TrandCard from "../TrandCard/TrandCard";
import { AppContext } from "../../context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Favorite({ onAddItem }) {
  const { favorites } = useContext(AppContext);
  console.log(favorites);

  return (
    <div className="favorite">
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <h1 className="section__title">Favorite</h1>
      {favorites.length > 0 ? (
        <ul className="trand-cards__list">
          {favorites.map((card) => (
            <TrandCard key={card._id} card={card} onAddItem={onAddItem} />
          ))}
        </ul>
      ) : (
        <div className="drawer__container-empty">
          <img className="drawer__img-empty" src={smile} alt="box" />
          <h3 className="drawer__title">You don't have favorite products</h3>
          <p className="drawer__info-text">Add Favorite Product</p>
          <Link to="/">
            <button className="drawer__info-btn">Go back</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favorite;
