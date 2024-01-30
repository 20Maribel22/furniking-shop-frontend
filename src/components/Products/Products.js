import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";
import ProductNew from "../Product/ProductNew";
import ProductBest from "../Product/ProductBest";
import ProductToday from "../Product/ProductToday";
import PaginationProduct from "../PaginationProduct/PaginationProduct";
import { productsApi } from "../../utils/ProductsApi";
import { useContext } from "react";
import { AppContext } from "../../context";
import Preloader from "../Preloader/Preloader";

function Products() {
  const [products, setProducts] = useState([]);
  const [productsNew, setProductsNew] = useState([]);
  const [productsBest, setProductsBest] = useState([]);
  const [productsTop, setProductsTop] = useState([]);
  const [toggle, setToggle] = useState(1);
  const [active, setActive] = useState(false);
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);
  const [activeThree, setActiveThree] = useState(false);

  const { isLoading, setIsLoading } = useContext(AppContext);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      productsApi.getProductsAll(),
      productsApi.getProductsBest(),
      productsApi.getProductsNew(),
      productsApi.getProductsTop(),
    ])
      .then(([data, dataBest, dataNew, dataTop]) => {
        setProducts(data);
        setProductsBest(dataBest);
        setProductsNew(dataNew);
        setProductsTop(dataTop);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(8);

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProduct = products.slice(firstProductIndex, lastProductIndex);
  const currentProductBest = productsBest.slice(
    firstProductIndex,
    lastProductIndex
  );
  const currentProductNew = productsNew.slice(
    firstProductIndex,
    lastProductIndex
  );
  const currentProductTrand = productsTop.slice(
    firstProductIndex,
    lastProductIndex
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const updateToggle = (_id) => {
    setToggle(_id);
  };

  const changeColor = () => {
    setActive(!active);
    setActiveOne(false);
    setActiveTwo(false);
    setActiveThree(false);
  };

  const changeColorOne = () => {
    setActiveOne(!activeOne);
    setActive(false);
    setActiveTwo(false);
    setActiveThree(false);
  };

  const changeColorTwo = () => {
    setActiveTwo(!activeTwo);
    setActive(false);
    setActiveOne(false);
    setActiveThree(false);
  };

  const changeColorThree = () => {
    setActiveThree(!activeThree);
    setActive(false);
    setActiveOne(false);
    setActiveTwo(false);
  };
  return (
    <section className="products">
      <h2 className="section__title">OUR PRODUCTS</h2>
      <nav className="trand-cards__nav">
        <ul className="trand-cards__nav-list trand-cards__nav-list_pro">
          <li
            className={
              active ? "trand-cards__link-active" : "trand-cards__link"
            }
            onClick={() => {
              updateToggle(1);
              changeColor();
            }}
          >
            All Products
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
            Best Sellers
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
            New Arrivals
          </li>
          <li
            className={
              activeThree ? "trand-cards__link-active" : "trand-cards__link"
            }
            onClick={() => {
              updateToggle(4);
              changeColorThree();
            }}
          >
            Todays Deals
          </li>
        </ul>
      </nav>
      <ul className="trand-cards__lists">
        <div className={toggle === 1 ? "trand-card-active" : "trand-card"}>
          {isLoading && <Preloader />}
          <div className="trand-cards__list">
            {currentProduct.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <PaginationProduct
            paginate={paginate}
            totalProducts={products.length}
            currentProduct={currentProduct}
            productPerPage={productPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div className={toggle === 2 ? "trand-card-active" : "trand-card"}>
          {isLoading && <Preloader />}
          <div className="trand-cards__list">
            {currentProductBest.map((product) => (
              <ProductBest key={product._id} product={product} />
            ))}
          </div>
          <PaginationProduct
            paginate={paginate}
            totalProducts={productsBest.length}
            currentProduct={currentProductBest}
            productPerPage={productPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div className={toggle === 3 ? "trand-card-active" : "trand-card"}>
          {isLoading && <Preloader />}
          <div className="trand-cards__list">
            {currentProductNew.map((product) => (
              <ProductNew key={product._id} product={product} />
            ))}
          </div>
          <PaginationProduct
            paginate={paginate}
            totalProducts={productsNew.length}
            currentProduct={currentProductNew}
            productPerPage={productPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
        <div className={toggle === 4 ? "trand-card-active" : "trand-card"}>
          {isLoading && <Preloader />}
          <div className="trand-cards__list">
            {currentProductTrand.map((product) => (
              <ProductToday key={product._id} product={product} />
            ))}
          </div>
          <PaginationProduct
            paginate={paginate}
            totalProducts={productsTop.length}
            currentProduct={currentProductTrand}
            productPerPage={productPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </ul>
    </section>
  );
}

export default Products;
