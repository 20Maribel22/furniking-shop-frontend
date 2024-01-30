import React, { useState } from "react";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
import CollectionAdmin from "./CollectionAdmin/CollectionAdmin";
import "./AdminPage.css";
import FooterAdmin from "./FooterAdmin/FooterAdmin";
import { Route, Routes } from "react-router-dom";
import ProductsAdmin from "./ProductsAdmin/ProductsAdmin";
import UsersAdmin from "./UsersAdmin/UsersAdmin";
import OrdersAdmin from "./OrdersAdmin/OrdersAdmin";
import ProductSingle from "./ProductsAdmin/ProductSingle";
import AddProductPopup from "./AddProductPopup/AddProductPopup";
import { productsApi } from "../../utils/ProductsApi";

function AdminPage({ handleLogout }) {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [products, setProducts] = useState([]);
  const [statusAddProduct, setStatusAddProduct] = useState(false);

  const handleOpenPopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  const deleteProduct = (product) => {
    productsApi
      .deleteProduct(product._id)
      .then(() => {
        const newProduct = products.filter((item) => item._id !== product._id);
        setProducts(newProduct);
      })
      .catch((err) => console.log(err));
  };

  const addProduct = (
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
  ) => {
    productsApi
      .addProduct(
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
      )
      .then((newProduct) => {
        setProducts([newProduct, ...products]);
        handleClosePopup();
      })
      .catch((err) => {
        console.log(err);
        setStatusAddProduct(err);
      });
  };

  return (
    <section className="admin__page">
      <HeaderAdmin handleLogout={handleLogout} />

      <Routes>
        <Route index element={<CollectionAdmin />} />
        <Route
          path="products"
          element={
            <ProductsAdmin
              openPopup={handleOpenPopup}
              products={products}
              setProducts={setProducts}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route path="products/:id" element={<ProductSingle />} />
        <Route path="users" element={<UsersAdmin />} />
        <Route path="orders" element={<OrdersAdmin />} />
      </Routes>

      <FooterAdmin />
      <AddProductPopup
        onClose={handleClosePopup}
        isOpen={isOpenPopup}
        addProduct={addProduct}
        statusAddProduct={statusAddProduct}
      />
    </section>
  );
}

export default AdminPage;
