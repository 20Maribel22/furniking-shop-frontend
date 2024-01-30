import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductsAdmin.css";
import { useContext } from "react";
import { AppContext } from "../../../context";
import { productsApi } from "../../../utils/ProductsApi";
import Preloader from "../../Preloader/Preloader";
import update from "../../../images/redo.svg";
import { ToastContainer, toast } from "react-toastify";

function ProductsAdmin({ openPopup, deleteProduct, products, setProducts }) {
  const { setIsLoading, isLoading } = useContext(AppContext);

  const { searchItems, setSearchItems } = useContext(AppContext);

  const handleChangeInput = (event) => {
    setSearchItems(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    productsApi
      .getProductsAll()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterProduct = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchItems.toLowerCase()) ||
      product.name.toLowerCase().includes(searchItems.toLowerCase()) ||
      product.status.toLowerCase().includes(searchItems.toLowerCase()) ||
      product.category.toLowerCase().includes(searchItems.toLowerCase())
    );
  });

  return (
    <div>
      <ul className="collections__links">
        <li>
          <Link to="/admin" className="collections__link">
            Home page
          </Link>
        </li>
        <li>
          <Link to="/admin/products" className="collections__link">
            All Products
          </Link>
        </li>
        <li>
          <button className="products-admin__btn-create" onClick={openPopup}>
            Add Product
          </button>
        </li>
      </ul>
      <div className="products-admin__container">
        <h1 className="memo__list-title">Products</h1>
        <form className="search__form search__form_admin" name="search">
          <div className="search__container">
            <input
              className="search__input search__input_admin"
              type="text"
              name="search"
              placeholder="Search here"
              required
              onChange={handleChangeInput}
              value={searchItems}
              maxLength="250"
              minLength="1"
            />
            {searchItems ? (
              <button
                className="search__button-del"
                onClick={() => setSearchItems("")}
              >
                x
              </button>
            ) : (
              ""
            )}
          </div>
        </form>

        {isLoading && <Preloader />}
        <table className="products-admin__table">
          <tbody>
            <tr>
              <th className="products-admin__name">№</th>
              <th className="products-admin__name">Id</th>
              <th className="products-admin__name">Category</th>
              <th className="products-admin__name">Status</th>
              <th className="products-admin__name">Name</th>
              <th className="products-admin__name">Info</th>
              <th className="products-admin__name">Price</th>
              <th className="products-admin__name">Old price</th>
              <th className="products-admin__name">Count</th>
              <th className="products-admin__name">Update</th>
              <th className="products-admin__name">Delete</th>
            </tr>
            {console.log(products)}
            {filterProduct.map((product, index) => (
              <React.Fragment key={product._id}>
                <tr>
                  <td className="products-admin__list">{index + 1}</td>
                  <td className="products-admin__list">{product._id}</td>
                  <td className="products-admin__list">{product.category}</td>
                  <td className="products-admin__list">{product.status}</td>
                  <td className="products-admin__list">{product.name}</td>
                  <td className="products-admin__list">{product.title}</td>
                  <td className="products-admin__list">{product.price}</td>
                  <td className="products-admin__list">{product.oldPrice}</td>
                  <td className="products-admin__list">
                    {product.countInStock}
                  </td>
                  <td className="products-admin__list">
                    <Link
                      className="products-admin__link"
                      to={`/admin/products/${product._id}`}
                    >
                      <img src={update} alt="" />
                    </Link>
                  </td>
                  <td
                    className="products-admin__list products-admin__list_del"
                    onClick={() => {
                      deleteProduct(product);
                      toast.success("Product removed!", {
                        position: toast.POSITION.BOTTOM_CENTER,
                      });
                    }}
                    title="Remove product"
                  >
                    &#x2716;
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
}

export default ProductsAdmin;
