import React from "react";
import "./CollectionAdmin.css";
import Memo from "../Memo/Memo";
import { Link } from "react-router-dom";

function CollectionAdmin() {
  return (
    <section className="collections collections__admin">
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
          <Link to="/admin/users" className="collections__link">
            Users
          </Link>
        </li>
        <li>
          <Link to="/admin/orders" className="collections__link">
            Orders
          </Link>
        </li>
      </ul>
      <Memo />
    </section>
  );
}

export default CollectionAdmin;
