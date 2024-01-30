import React, { useState } from "react";
import "./Feedback.css";
import { useEffect } from "react";
import { feedbackApi } from "../../utils/FeedbackApi";
import { useContext } from "react";
import { AppContext } from "../../context";
import { Link } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

function Feedback() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(false);
  const [comment, setComment] = useState("");
  const [photo, setPhoto] = useState("");
  const [inputNameError, setInputNameError] = useState("");
  const [inputStatusError, setInputStatusError] = useState("");
  const [inputCommentError, setInputCommentError] = useState("");
  const [inputPhotoError, setInputPhotoError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isStatusValid, setIsStatusValid] = useState(false);
  const [isCommentValid, setIsCommentValid] = useState(false);
  const [isPhotoValid, setIsPhotoValid] = useState(false);
  const [statusFeedback, setStatusFeedback] = useState(false);
  const [isMessage, setIsMessage] = useState("");

  const { feedback, isLoading } = useContext(AppContext);

  const handleMessage = () => {
    if (statusFeedback) {
      switch (statusFeedback) {
        case 200:
          setIsMessage("Data updated");
          break;
        case 400:
          setIsMessage("Data filled in incorrectly!");
          break;
        case 409:
          setIsMessage("A user with this data has already left a review!");
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
  }, [statusFeedback]);

  const handleFeedback = (photo, name, status, comment, resetForm) => {
    feedbackApi
      .saveFeedback(photo, name, status, comment)
      .then((res) => {
        if (res) {
          resetForm && resetForm();
        }
      })
      .catch((err) => {
        console.log(err);
        setStatusFeedback(err);
      });
  };

  const handleChangePhoto = (e) => {
    let inputValue = e.target.value;
    setPhoto(inputValue);

    const photoRegex = /^http(s)?:\/\/[a-zA-Z0-9.-]+\.[a-z]{2,3}(\/[^\s]*)?/;
    if (inputValue.length === 0) {
      setInputPhotoError("Photo must not be empty");
      setIsPhotoValid(false);
    } else if (!photoRegex.test(String(inputValue).toLowerCase())) {
      setInputPhotoError("Please enter correct photo");
      setIsPhotoValid(false);
    } else {
      setInputPhotoError("");
      setIsPhotoValid(true);
    }
  };

  const handleChangeName = (e) => {
    let inputValue = e.target.value;
    setName(inputValue);

    if (inputValue.length === 0) {
      setInputNameError("The name must not be empty");
      setIsNameValid(false);
    } else {
      setInputNameError("");
      setIsNameValid(true);
    }
  };

  const handleChangeStatus = (e) => {
    let inputValue = e.target.value;
    setStatus(inputValue);

    if (inputValue.length === 0) {
      setInputStatusError("Status must not be empty");
      setIsStatusValid(false);
    } else {
      setInputStatusError("");
      setIsStatusValid(true);
    }
  };

  const handleChangeComment = (e) => {
    let inputValue = e.target.value;
    setComment(inputValue);

    if (inputValue.length === 0) {
      setInputCommentError("The comment must not be empty");
      setIsCommentValid(false);
    } else {
      setInputCommentError("");
      setIsCommentValid(true);
    }
  };

  function handleFinalValidation() {
    if (!isPhotoValid || !isNameValid || !isStatusValid || !isCommentValid) {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);
  }

  const resetForm = () => {
    setPhoto("");
    setName("");
    setStatus("");
    setComment("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleFeedback(photo, name, status, comment, resetForm);
  }

  useEffect(() => {
    handleFinalValidation();
  }, [photo, name, status, comment]);

  return (
    <div className="feedback">
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <h1 className="feedback__title">What our customers say</h1>
      {isLoading && <Preloader />}
      <ul className="feedback__list">
        {feedback.map((p) => (
          <li className="feedback__link" key={p._id}>
            <div className="feedback__container-info">
              <img className="feedback__img" src={p.photo} alt={p.name} />
              <div>
                <h2 className="feedback__title-info">{p.name}</h2>
                <p className="feedback__info">{p.status}</p>
              </div>
            </div>

            <p className="feedback__text">{p.comment}</p>
          </li>
        ))}
      </ul>
      <h3 className="feedback__title feedback__title_form">Leave feedback</h3>
      <form
        className="feedback__form"
        name="feedback"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className="feedback__input"
          id="photo"
          type="url"
          name="photo"
          placeholder="Photo"
          value={photo || ""}
          onChange={handleChangePhoto}
        />

        <span className="feedback__input-error">{inputPhotoError}</span>

        <input
          className="feedback__input"
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={name || ""}
          onChange={handleChangeName}
          required
        />
        <span className="feedback__input-error">{inputNameError}</span>
        <input
          className="feedback__input"
          id="status"
          type="text"
          name="status"
          placeholder="Status"
          value={status || ""}
          onChange={handleChangeStatus}
          required
        />
        <span className="feedback__input-error">{inputStatusError}</span>
        <textarea
          className="feedback__input"
          id="comment"
          name="comment"
          value={comment || ""}
          placeholder="Comment"
          rows="5"
          cols="33"
          onChange={handleChangeComment}
        ></textarea>
        <span className="feedback__input-error">{inputCommentError}</span>
        <span className="feedback__message">{isMessage}</span>
        <button
          className={`feedback__btn ${
            isFormValid ? "" : "feedback__btn_inactive"
          }`}
          name="submit"
          type="submit"
          disabled={!isFormValid}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Feedback;
