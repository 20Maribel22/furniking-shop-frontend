import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import "./Layout.css";

function Layout({ openDrawer, totalPrice, isAuth }) {
  return (
    <>
      <div className="layout">
        <Header isAuth={isAuth} />
        <SearchForm openDrawer={openDrawer} totalPrice={totalPrice} />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
