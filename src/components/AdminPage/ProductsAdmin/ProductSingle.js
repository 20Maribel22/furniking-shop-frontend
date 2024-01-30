import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productsApi } from "../../../utils/ProductsApi";

function ProductSingle() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [text, setText] = useState("");
  const [isMessage, setIsMessage] = useState("");
  const [statusUpdateProduct, setStatusUpdateProduct] = useState(false);

  const handleMessage = () => {
    if (statusUpdateProduct) {
      switch (statusUpdateProduct) {
        case 200:
          setIsMessage("Data saved.");
          break;
        case 400:
          setIsMessage("Data filled in incorrectly!");
          break;
        case 409:
          setIsMessage("This product already exists!");
          break;
        case 500:
          setIsMessage("Error on the server.");
          break;
        default:
          setIsMessage("An error has occurred.Try later.");
          break;
      }
    }
  };

  useEffect(() => {
    handleMessage();
  }, [statusUpdateProduct]);

  let navigate = useNavigate();

  useEffect(() => {
    productsApi
      .getProductAll(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    setStatus(product.status || "");
    setPrice(product.price || "");
    setOldPrice(product.oldPrice || "");
    setCountInStock(product.countInStock || "");
    setText(product.text || "");
  }, [product]);

  const handleChangeStatus = (e) => {
    let inputValue = e.target.value;
    setStatus(inputValue);
  };

  const handleChangePrice = (e) => {
    let inputValue = e.target.value;
    setPrice(inputValue);
  };

  const handleChangeOldPrice = (e) => {
    let inputValue = e.target.value;
    setOldPrice(inputValue);
  };

  const handleChangecount = (e) => {
    let inputValue = e.target.value;
    setCountInStock(inputValue);
  };

  const handleChangeText = (e) => {
    let inputValue = e.target.value;
    setText(inputValue);
  };

  const updateProduct = (status, price, oldPrice, countInStock, text) => {
    productsApi
      .updateProduct(id, {
        status: status,
        price: price,
        oldPrice: oldPrice,
        countInStock: countInStock,
        text: text,
      })
      .then((res) => {
        console.log(res);
        navigate("/admin/products");
      })
      .catch((err) => {
        console.log(err);
        setStatusUpdateProduct(err);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    updateProduct(status, price, oldPrice, countInStock, text);
  }

  return (
    <div className="shop">
      <Link className="shop-page__btn" to="/admin/products">
        All Products
      </Link>

      <form className="single__form" name="single" onSubmit={handleSubmit}>
        <div className="single__form-container">
          <ul>
            <li className="single__label">Id:</li>
            <li className="single__label">Category:</li>
            <li className="single__label">Status:</li>
            <li className="single__label">Name:</li>
            <li className="single__label">Info:</li>
            <li className="single__label">Price:</li>
            <li className="single__label">Old Price:</li>
            <li className="single__label">Count:</li>
            <li className="single__label">Text:</li>
          </ul>
          <div className="single__input-container">
            <input
              className="single__input"
              id="id"
              type="text"
              name="id"
              defaultValue={product._id}
              required
            />
            <input
              className="single__input"
              id="category"
              type="text"
              name="category"
              defaultValue={product.category}
              required
            />
            <input
              className="single__input"
              id="status"
              type="text"
              name="status"
              value={status}
              onChange={handleChangeStatus}
              required
            />
            <input
              className="single__input"
              id="name"
              type="text"
              name="name"
              defaultValue={product.name}
              required
            />
            <input
              className="single__input"
              id="title"
              type="text"
              name="title"
              defaultValue={product.title}
              required
            />
            <input
              className="single__input"
              id="price"
              type="text"
              name="price"
              value={price}
              onChange={handleChangePrice}
              required
            />
            <input
              className="single__input"
              id="oldPrice"
              type="text"
              name="oldPrice"
              value={oldPrice}
              onChange={handleChangeOldPrice}
              required
            />
            <input
              className="single__input"
              id="count"
              type="text"
              name="count"
              value={countInStock}
              onChange={handleChangecount}
              required
            />
            <textarea
              className="single__textarea"
              id="text"
              type="text"
              name="text"
              rows="5"
              cols="33"
              value={text}
              onChange={handleChangeText}
              required
            />
          </div>
          <div className="single__input-container">
            <h1 className="single__title">{product.name}</h1>
            <img className="single__img" src={product.url} alt={product.name} />
          </div>
        </div>
        <span className="popup__message">{isMessage}</span>
        <button className="single__btn" name="submit" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default ProductSingle;
