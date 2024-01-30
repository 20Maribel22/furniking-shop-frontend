import React from "react";
import "./Articles.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import { blog } from "../../utils/data";

function Articles() {
  return (
    <section className="articles">
      <h2 className="section__title section__title_feedback">
        Our Latest Articles
      </h2>
      <ul className="articles__list">
        {blog.map((b) => (
          <ArticleCard b={b} key={b.id} />
        ))}
      </ul>
    </section>
  );
}

export default Articles;
