import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productsApi } from "../../../utils/ProductsApi";
import { useContext } from "react";
import { AppContext } from "../../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "../../Preloader/Preloader";

function Mirrors() {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(8);

  const { onAddToCart, onAddToFavorite, isLoading, setIsLoading } =
    useContext(AppContext);

  useEffect(() => {
    setIsLoading(true);
    productsApi
      .getMirrors()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const showMoreProducts = () => {
    setVisible((prev) => prev + 4);
  };

  return (
    <div className="shop">
      <h1 className="section__title">Mirrors</h1>
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      {isLoading && <Preloader />}
      <ul className="shop__list">
        {products.slice(0, visible).map((product) => (
          <li key={product._id}>
            <div className="trand-card__container">
              <Link className="shop__link" to={`/mirrors/${product._id}`}>
                <img
                  className="trand-card__img"
                  src={product.url}
                  alt={product.title}
                />
              </Link>
              <h2 className="trand-card__title">{product.name}</h2>
              <h3 className="trand-card__subtitle">{product.title}</h3>
              <div className="trand-card__text-container">
                <p className="trand-card__text">${product.price}</p>
                <p className="trand-card__text trand-card__text_old">
                  {product.oldPrice}
                </p>
                {console.log(product.url)}
              </div>
              <img
                className="trand-card__info"
                src={product.image}
                alt="information"
              />
              <button
                className="shop__page-btn"
                onClick={() => onAddToCart(product)}
              >
                Buy
              </button>
              <button
                className="shop__page-btn shop__page-btn_green"
                onClick={() => {
                  onAddToFavorite(product);
                  toast.success("Product added to favorites!", {
                    position: toast.POSITION.BOTTOM_CENTER,
                  });
                }}
              >
                Like
              </button>
              <ToastContainer />
            </div>
          </li>
        ))}
      </ul>
      <div className="shop-page__btn-container">
        <button
          style={{ display: visible >= products.length ? "none" : "block" }}
          type="button"
          className="shop-page__btn_big"
          onClick={showMoreProducts}
        >
          More
        </button>
      </div>
    </div>
  );
}

export default Mirrors;
