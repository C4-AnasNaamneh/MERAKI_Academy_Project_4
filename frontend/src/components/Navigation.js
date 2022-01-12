import React from "react";
import { Routes, Route, Link } from "react-router-dom";

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
        {token ? (
          <>
          
           { isAdmin? <></> : <Link to="/products">Products</Link>}

            {isAdmin ? <Link to="/adminproducts">Admin Products</Link> : <></>}

            {isAdmin ? <Link to="/newproduct">New Products</Link> : <></>}

            {isAdmin ? <></>: <Link to="/cart">Cart</Link>}


            <Link to="/login">
              <button onClick={logout}>Log Out</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navigation;
