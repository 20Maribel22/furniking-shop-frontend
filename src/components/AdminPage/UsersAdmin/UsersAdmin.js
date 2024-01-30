import React, { useContext, useEffect, useState } from "react";
import Preloader from "../../Preloader/Preloader";
import { Link } from "react-router-dom";

import { AppContext } from "../../../context";
import { auth } from "../../../utils/Auth";

function UsersAdmin() {
  const { setIsLoading, isLoading } = useContext(AppContext);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    auth.setToken(jwt);
    if (jwt) {
      auth
        .getAllUsers()
        .then((user) => {
          if (user) {
            setUsers(user);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  // createdAt.getMonth() + 1;  // Месяца в JS начинаются с 0, поэтому добавляем 1

  return (
    <div>
      <ul className="collections__links">
        <li>
          <Link to="/admin" className="collections__link">
            Home page
          </Link>
        </li>
        <li>
          <Link to="/admin/users" className="collections__link">
            Users
          </Link>
        </li>
      </ul>
      <div className="products-admin__container">
        <h1 className="memo__list-title">Users</h1>
        {isLoading && <Preloader />}
        <table className="products-admin__table">
          <tbody>
            <tr>
              <th className="products-admin__name">№</th>
              <th className="products-admin__name">Id</th>

              <th className="products-admin__name">Name</th>
              <th className="products-admin__name">Email</th>
              <th className="products-admin__name">Phone</th>
              <th className="products-admin__name">Registration date</th>
            </tr>
            {console.log(users)}
            {users.map((user, index) => (
              <React.Fragment key={user._id}>
                <tr>
                  <td className="products-admin__list">{index + 1}</td>
                  <td className="products-admin__list">{user._id}</td>
                  <td className="products-admin__list">{user.name}</td>
                  <td className="products-admin__list">{user.email}</td>
                  <td className="products-admin__list">{user.phone}</td>
                  <td className="products-admin__list">
                    {new Date(user.createdAt).getDate()}.
                    {new Date(user.createdAt).getMonth() + 1}.
                    {new Date(user.createdAt).getFullYear()}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersAdmin;
