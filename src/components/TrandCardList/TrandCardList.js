import React, { useState } from "react";
import "./TrandCardList.css";
import TrandCard from "../TrandCard/TrandCard";
import TrandCardNew from "../TrandCard/TrandCardNew";
import TrandCardBest from "../TrandCard/TrandCardBest";
import Pagination from "../Pagination/Pagination";
import { useEffect } from "react";
import { productsApi } from "../../utils/ProductsApi";
import Preloader from "../Preloader/Preloader";
import { useContext } from "react";
import { AppContext } from "../../context";

function TrandCardList() {
  const [products, setProducts] = useState([]);
  const [productsNew, setProductsNew] = useState([]);
  const [productsBest, setProductsBest] = useState([]);
  const [toggle, setToggle] = useState(1);
  const [active, setActive] = useState(false);
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);

  const { isLoading, setIsLoading } = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      productsApi.getProductsTop(),
      productsApi.getProductsNew(),
      productsApi.getProductsBest(),
    ])
      .then(([data, dataNew, dataBest]) => {
        setProducts(data);
        setProductsNew(dataNew);
        setProductsBest(dataBest);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const [currentPage, setCurrentPage] = useState(1); //текущая страница
  const [cardsPerPage] = useState(8); // количество карточек на одну страницу

  const lastCardIndex = currentPage * cardsPerPage; // индекс последней карточки
  const firstCardIndex = lastCardIndex - cardsPerPage; // индекс первой карточки
  const currentCard = products.slice(firstCardIndex, lastCardIndex); // текущая карточка
  const currentNewCard = productsNew.slice(firstCardIndex, lastCardIndex);
  const currentBestCard = productsBest.slice(firstCardIndex, lastCardIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const updateToggle = (id) => {
    setToggle(id);
  };

  const changeColor = () => {
    setActive(!active);
    setActiveOne(false);
    setActiveTwo(false);
  };

  const changeColorOne = () => {
    setActiveOne(!activeOne);
    setActive(false);
    setActiveTwo(false);
  };

  const changeColorTwo = () => {
    setActiveTwo(!activeTwo);
    setActive(false);
    setActiveOne(false);
  };

  return (
    <section className="trand-cards">
      <h2 className="section__title">TRENDING</h2>
      <nav className="trand-cards__nav">
        <ul className="trand-cards__nav-list">
          <li
            className={
              active ? "trand-cards__link-active" : "trand-cards__link"
            }
            onClick={() => {
              updateToggle(1);
              changeColor();
            }}
          >
            Top Products
          </li>
          <li
            className={
              activeOne ? "trand-cards__link-active" : "trand-cards__link"
            }
            onClick={() => {
              updateToggle(2);
              changeColorOne();
            }}
          >
            New Arrivals
          </li>
          <li
            className={
              activeTwo ? "trand-cards__link-active" : "trand-cards__link"
            }
            onClick={() => {
              updateToggle(3);
              changeColorTwo();
            }}
          >
            Best Sellers
          </li>
        </ul>
      </nav>
      <ul className="trand-cards__lists">
        <div className={toggle === 1 ? "trand-card__active" : "trand-card"}>
          {isLoading && <Preloader />}
          <div className="trand-cards__list">
            {currentCard.map((card) => (
              <TrandCard key={card._id} card={card} favorited={false} />
            ))}
          </div>
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={products.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        <div
          id="trand"
          className={toggle === 2 ? "trand-card__active" : "trand-card"}
        >
          {isLoading && <Preloader />}
          <div className="trand-cards__list">
            {currentNewCard.map((card) => (
              <TrandCardNew key={card._id} card={card} />
            ))}
          </div>
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={productsNew.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
        <div className={toggle === 3 ? "trand-card__active" : "trand-card"}>
          {isLoading && <Preloader />}
          <div className="trand-cards__list">
            {" "}
            {currentBestCard.map((card) => (
              <TrandCardBest key={card._id} card={card} />
            ))}
          </div>
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={productsBest.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </ul>
    </section>
  );
}

export default TrandCardList;
