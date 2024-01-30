import React from "react";
import "./Pagination.css";

function Pagination({ cardsPerPage, totalCards, paginate, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div className="pagination__container">
        {pageNumbers.map((number, i) => (
          <button
            className={
              number === currentPage
                ? "pagination__btn-active"
                : "pagination__btn"
            }
            key={i}
            onClick={() => paginate(number)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
