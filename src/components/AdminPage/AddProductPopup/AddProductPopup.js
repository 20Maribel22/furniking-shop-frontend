import React, { useEffect, useState } from "react";
import "./AddProductPopup.css";

function AddProductPopup({ isOpen, onClose, addProduct, statusAddProduct }) {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [isMessage, setIsMessage] = useState("");

  const handleMessage = () => {
    if (statusAddProduct) {
      switch (statusAddProduct) {
        case 200:
          setIsMessage("Data saved.");
          break;
        case 400:
          setIsMessage("Data filled in incorrectly!");
          break;
        case 409:
          setIsMessage("This product has already been added!");
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
  }, [statusAddProduct]);

  const handleChangeCategory = (e) => {
    let inputValue = e.target.value;
    setCategory(inputValue);
  };

  const handleChangeStatus = (e) => {
    let inputValue = e.target.value;
    setStatus(inputValue);
  };

  const handleChangeName = (e) => {
    let inputValue = e.target.value;
    setName(inputValue);
  };

  const handleChangeTitle = (e) => {
    let inputValue = e.target.value;
    setTitle(inputValue);
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

  const handleChangePhoto = (e) => {
    let inputValue = e.target.value;
    setUrl(inputValue);
  };

  const handleChangeImage = (e) => {
    let inputValue = e.target.value;
    setImage(inputValue);
  };

  const handleChangeText = (e) => {
    let inputValue = e.target.value;
    setText(inputValue);
  };

  function handleSubmit(event) {
    event.preventDefault();

    addProduct(
      category,
      status,
      name,
      title,
      price,
      oldPrice,
      countInStock,
      url,
      image,
      text
    );
  }

  useEffect(() => {
    setCategory("");
    setStatus("");
    setName("");
    setTitle("");
    setPrice("");
    setOldPrice("");
    setCountInStock("");
    setUrl("");
    setImage("");
    setText("");
  }, [isOpen]);

  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <h3>Add Product</h3>
        <form name="add" className="popup__form" onSubmit={handleSubmit}>
          <label className="popup__field">
            <input
              onChange={handleChangeCategory}
              className="popup__item"
              type="text"
              id=""
              name=""
              value={category}
              placeholder="Category"
              required
            />
          </label>
          <label className="popup__field">
            <input
              onChange={handleChangeStatus}
              className="popup__item"
              type="text"
              id=""
              name=""
              value={status}
              placeholder="Status"
              required
            />
          </label>
          <label className="popup__field">
            <input
              onChange={handleChangeName}
              className="popup__item"
              type="text"
              id=""
              name=""
              value={name}
              placeholder="Name"
              required
            />
          </label>
          <label className="popup__field">
            <input
              onChange={handleChangeTitle}
              className="popup__item"
              type="text"
              id=""
              name=""
              value={title}
              placeholder="Info"
              required
            />
          </label>
          <label className="popup__field">
            <input
              onChange={handleChangePrice}
              className="popup__item"
              type="text"
              id=""
              name=""
              value={price}
              placeholder="Price"
              required
            />
          </label>
          <label className="popup__field">
            <input
              onChange={handleChangeOldPrice}
              className="popup__item"
              type="text"
              id=""
              name=""
              value={oldPrice}
              placeholder="Old Price"
              required
            />
          </label>
          <label className="popup__field">
            <input
              onChange={handleChangecount}
              className="popup__item"
              type="text"
              id=""
              name=""
              value={countInStock}
              placeholder="Count"
              required
            />
          </label>
          <label className="popup__field">
            <input
              onChange={handleChangePhoto}
              className="popup__item"
              type="url"
              id=""
              name=""
              value={url}
              placeholder="Photo"
              required
            />
          </label>
          <label className="popup__field">
            <input
              onChange={handleChangeImage}
              className="popup__item"
              type="url"
              id=""
              name=""
              value={image}
              placeholder="Image status"
              required
            />
          </label>
          <label className="popup__field">
            <textarea
              onChange={handleChangeText}
              className="popup__item"
              type="text"
              id=""
              name=""
              value={text}
              placeholder="Description"
              required
            />
          </label>
          <span className="popup__message">{isMessage}</span>
          <button type="submit" className="popup__button-save">
            Add
          </button>
        </form>
        <button type="button" className="popup__button-close" onClick={onClose}>
          x
        </button>
      </div>
    </div>
  );
}

export default AddProductPopup;
