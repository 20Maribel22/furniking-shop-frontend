import React from "react";
import "./Vacancies.css";
import { Link } from "react-router-dom";

function Vacancies() {
  return (
    <div className="job">
      <Link className="shop-page__btn" to="/">
        Home
      </Link>
      <h1 className="section__title">Vacancies</h1>
      <div className="job__container">
        <h2 className="job__title">
          The company's open vacancies can be viewed below:
        </h2>
        <p className="job__text">
          HR department phone :<b>0985006543</b>
        </p>
        <p className="job__text">
          You can send your CV, with a note about the vacancy, to the email
          address :<b>furniking.hr@yandex.ru</b>
        </p>
      </div>
    </div>
  );
}

export default Vacancies;
