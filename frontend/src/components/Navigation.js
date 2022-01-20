import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Search from "./Search";

const Navigation = ({ isLoggedIn, setIsLoggedIn, setToken, isAdmin }) => {
  const token = localStorage.getItem("token");
  const logout = () => {
    setToken("");
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className="navigation">
        <div className="websiteName">
          {" "}
          <h1>E<em>-Buy</em></h1>{" "}
        </div>

        {<Search />}


        {token ? (
          <>
            {isAdmin ? (
              <></>
            ) : (
              <Link to="/products" className="productsLink">
                Products
              </Link>
            )}

            {isAdmin ? (
              <Link to="/adminproducts" className="adminProductsLink">
                Admin Products
              </Link>
            ) : (
              <></>
            )}

            {isAdmin ? (
              <Link to="/newproduct" className="newProductsLink">
                New Products
              </Link>
            ) : (
              <></>
            )}

            {isAdmin ? (
              <></>
            ) : (
              <Link to="/cart" className="cartLink">
                <i class="fas fa-shopping-cart"></i>
                Cart
              </Link>
            )}

            {isAdmin ? (
              <Link to="/orders" className="ordersLink">
                Orders
              </Link>
            ) : (
              <></>
            )}

            <Link to="/login">
              <button onClick={logout} className="logoutButton">
                <i class="fas fa-window-close"></i>
              </button>
            </Link>
          </>
        ) : (
          <>
            <div className="registerNav">
              <Link to="/register" className="registerLink">
                Register
              </Link>
              </div>
<div>

<Link to="/login" className="loginLink">
                Login
              </Link>
</div>
           
          </>
        )}
      </div>
    </>
  );
};

export default Navigation;
