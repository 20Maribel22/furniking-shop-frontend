import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { productsApi } from "../../../utils/ProductsApi";
import { AppContext } from "../../../context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "../../Preloader/Preloader";

function SinglePageMirror() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const { onAddToCart, onAddToFavorite, isLoading, setIsLoading } =
    useContext(AppContext);

  const goBack = () => navigate(-1);

  useEffect(() => {
    setIsLoading(true);
    productsApi
      .getMirror(id)
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="shop">
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <span>&#187;</span>
      <span className="shop-page__btn" onClick={goBack}>
        Mirrors
      </span>
      {isLoading && <Preloader />}
      {product && (
        <>
          <div className="product-single__container">
            <img
              className="product-single__img"
              src={product.url}
              alt={product.title}
            />
            <div className="product-single__description">
              <h1 className="product-single__title">{product.title}</h1>
              <h4 className="product-single__text">
                <b>Status:</b>&nbsp;
                {product.countInStock > 0 ? (
                  <span>In Stock</span>
                ) : (
                  <span>unavailable</span>
                )}
              </h4>
              <ul>
                {product.countInStock > 0 ? (
                  <>
                    <li className="product-single__text">
                      <p>
                        <b>Quantity:</b>&nbsp;{product.countInStock}
                      </p>
                    </li>

                    <div className="product-single__btns">
                      <button
                        className="product-single__btn"
                        onClick={() => onAddToCart(product)}
                      >
                        Buy
                      </button>
                      <button
                        className="product-single__btn product-single__btn_green"
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
                  </>
                ) : null}
                <li className="product-single__text">
                  <b>Description:</b>
                </li>
                <li className="product-single__text">{product.text}</li>
                <li className="product-single__text">
                  Price:&nbsp;<b>{product.price}$</b>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SinglePageMirror;
