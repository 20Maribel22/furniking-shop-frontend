import React from "react";
import "./PaginationProduct.css";

function PaginationProduct({
  paginate,
  totalProducts,
  currentProduct,
  productPerPage,
  setCurrentPage,
  currentPage,
}) {
  const numberPage = Math.ceil(totalProducts / productPerPage);

  const handleChangePage = (e) => {
    const value = e.target.value; //

    if (value >= 1 && value <= numberPage) {
      setCurrentPage(value);
    }
  };

  // текущая страница будет равна количеству страниц, то дальше не переключает
  const nextPage = () => {
    if (currentPage !== numberPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // текущая страница будет равна 1, то дальше не переключает
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pagination-product">
      <button className="pagination-product__btn" onClick={nextPage}>
        {" "}
        Next page &#8594;
      </button>
      <p className="pagination-product__title">Page</p>

      <input
        className="pagination-product__input"
        value={currentPage}
        type="text"
        onChange={handleChangePage}
      />
      <p className="pagination-product__text">of {numberPage}</p>
      <button className="pagination-product__btn-arrow" onClick={prevPage}>
        &#8249;
      </button>
      <button className="pagination-product__btn-arrow" onClick={nextPage}>
        &#8250;
      </button>
    </div>
  );
}

export default PaginationProduct;
