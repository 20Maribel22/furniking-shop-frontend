import React, { useEffect, useState } from "react";
import "./Register.css";
import logo from "../../images/Logo.svg";
import { useLocation, Link } from "react-router-dom";

function Register({ handleRegister, statusRegister }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputPhoneError, setInputPhoneError] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [inputNameError, setInputNameError] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [inputEmailError, setInputEmailError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [inputPasswordError, setInputPasswordError] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isMessage, setIsMessage] = useState("");

  const { pathname } = useLocation();

  const registerButtonClassName = `register__button ${
    pathname === "/auth/signin" ? "register__button_type_login" : ""
  }`;

  const handleMessage = () => {
    if (statusRegister) {
      switch (statusRegister) {
        case 409:
          setIsMessage("A user with such data already exists");
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
  }, [statusRegister]);

  function handleChangeName(e) {
    let inputValue = e.target.value;
    setName(inputValue);
    const nameRegex = /^[а-яА-ЯёЁa-zA-Z -]+$/g;
    if (inputValue.legth < 2 || inputValue.legth > 30) {
      setInputNameError("The length of the name is from 2 to 30 characters");
      setIsNameValid(false);
    } else if (!nameRegex.test(String(inputValue))) {
      setInputNameError(
        "The name does not match the template: [а-яА-Яa-zA-Z -]"
      );
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
      setInputNameError("");
    }
  }

  function handleChangePhone(e) {
    let inputValue = e.target.value;
    setPhone(inputValue);
    const phoneRegex = /^\+?(\(996\)\d{3})|\d{11}$/;
    if (inputValue.length === 0) {
      setInputPhoneError("Phone must not be empty");
      setIsPhoneValid(false);
    } else if (!phoneRegex.test(String(inputValue))) {
      setInputPhoneError("Phone does not match the template: +996..");
      setIsPhoneValid(false);
    } else {
      setInputPhoneError("");
      setIsPhoneValid(true);
    }
  }

  function handleChangeEmail(e) {
    let inputValue = e.target.value;
    setEmail(inputValue);
    const emailRegex = /^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (inputValue.length === 0) {
      setInputEmailError("e-mail must not be empty");
      setIsEmailValid(false);
    } else if (!emailRegex.test(String(inputValue).toLowerCase())) {
      setInputEmailError("Please enter correct e-mail");
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      setInputEmailError("");
    }
  }

  function handleChangePassword(e) {
    let inputValue = e.target.value;
    setPassword(inputValue);
    if (inputValue.length === 0) {
      setInputPasswordError("Password must not be empty");
      setIsPasswordValid(false);
    } else {
      setInputPasswordError("");
      setIsPasswordValid(true);
    }
  }

  function handleFinalValidation() {
    if (!isEmailValid || !isPasswordValid || !isNameValid || !isPhoneValid) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
  }

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(name, phone, email, password, resetForm);
  }

  useEffect(() => {
    handleFinalValidation();
  }, [phone, email, password, isNameValid]);

  return (
    <>
      <section className="register">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <form
          className="register__form"
          name="register"
          onSubmit={handleSubmit}
          noValidate
        >
          <h1 className="register__title">Registration</h1>
          <p className="register__info">
            Registration gives a lot of winnings and takes only 30 seconds of
            your time
          </p>
          <label className="register__label">
            <input
              className="register__input"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              value={name || ""}
              onChange={handleChangeName}
              required
            />
            <span className="register__input-error">{inputNameError}</span>
          </label>
          <label className="register__label">
            <input
              className="register__input"
              id="phone"
              type="text"
              name="phone"
              placeholder="Phone"
              value={phone || ""}
              onChange={handleChangePhone}
              required
            />
            <span className="register__input-error">{inputPhoneError}</span>
          </label>
          <label className="register__label">
            <input
              className="register__input"
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              value={email || ""}
              onChange={handleChangeEmail}
              required
            />
            <span className="register__input-error email-input-error">
              {inputEmailError}
            </span>
          </label>
          <label className="register__label">
            <input
              className="register__input"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password || ""}
              onChange={handleChangePassword}
            />
            <span className="register__input-error">{inputPasswordError}</span>
          </label>
          <span className="register__message">{isMessage}</span>
          <button
            name="submit"
            className={registerButtonClassName}
            type="submit"
            title="Register"
            disabled={!isFormValid}
          >
            Register
          </button>
        </form>
        <div className="register__container">
          <p className="register__text">
            Already registered?
            <Link to="/auth/signin" className="register__link">
              Login
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Register;
