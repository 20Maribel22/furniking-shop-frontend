import React from "react";
import "./ArticleCard.css";
import { Link } from "react-router-dom";

function ArticleCard({ b }) {
  return (
    <li className="blog__card">
      <img className="blog__img" src={b.url} alt="" />
      <div className="blog__container-info">
        <div className="blog__container-pro">
          <img className="blog__info" src={b.image} alt="" />
          <span className="blog__date">{b.date}</span>
        </div>
        <h2 className="blog__title">{b.title}</h2>
        <Link to="/blog">
          <button className="blog__btn">Read more</button>
        </Link>
      </div>
    </li>
  );
}

export default ArticleCard;
