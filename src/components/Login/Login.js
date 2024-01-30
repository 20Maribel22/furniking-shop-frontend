import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../../images/Logo.svg";
import { useLocation, Link } from "react-router-dom";

function Login({ handleLogin, statusLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    if (statusLogin) {
      switch (statusLogin) {
        case 400:
        case 401:
          setIsMessage("Incorrect login or password.");
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
  }, [statusLogin]);

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
    if (!isEmailValid || !isPasswordValid) {
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
  }

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password, resetForm);
  }

  useEffect(() => {
    handleFinalValidation();
  }, [email, password]);

  return (
    <>
      <section className="register">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <form className="register__form" name="login" onSubmit={handleSubmit}>
          <h1 className="register__title">Login</h1>
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
              value={password || ""}
              onChange={handleChangePassword}
              required
            />
            <span className="register__input-error email-input-error">
              {inputPasswordError}
            </span>
          </label>
          <span className="register__message register__message-err">
            {isMessage}
          </span>
          <button
            name="submit"
            className={registerButtonClassName}
            type="submit"
            disabled={!isFormValid}
          >
            Sign in
          </button>
        </form>
        <div className="register__container">
          <p className="register__text">
            Not registered yet?
            <Link to="/auth/signup" className="register__link">
              Register
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default Login;
