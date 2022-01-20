import React, { createContext } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";

import { useState } from "react";
import NewProduct from "./components/admin/NewProduct";

import ProductsAdmin from "./components/admin/ProductsAdmin";

import AddToCart from "./components/AddToCart";

import Search from "./components/Search";

import View from "./components/View";

import Orders from "./components/admin/Orders";

const App = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const tokenstorge = localStorage.getItem("token");
  const [isAdmin, setIsAdmin] = useState(false);

  const [view, setView] = useState([]);

 // console.log(view);

  const [title, setTitle] = useState("");


  const [check,setCheck] = useState("")

  console.log(check);

const [total,setTotal] = useState(0)


  //console.log(view);
  return (
    <>
      <div className="App">
        <Navigation
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setToken={setToken}
          isAdmin={isAdmin}
        />




        <Routes>
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login
                setToken={setToken}
                setIsLoggedIn={setIsLoggedIn}
                setIsAdmin={setIsAdmin}
              />
            }
          />
          <Route path="/products" element={<Products token={tokenstorge}  />} />
          <Route
            path="/newproduct"
            element={<NewProduct token={tokenstorge} />}
          />
          <Route
            path="/adminproducts"
            element={<ProductsAdmin token={tokenstorge} />}
          />

          <Route path="/orders" element={<Orders check={check} token={tokenstorge} />} />

          <Route path="/cart" element={<AddToCart token={tokenstorge}  setCheck={setCheck} />} />
          <Route
            path="/search"
            element={<Search token={tokenstorge} setView={setView} />}
          />

          <Route path="/view" element={<View view={view} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
