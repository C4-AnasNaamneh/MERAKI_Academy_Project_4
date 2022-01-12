import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";

import { useState } from "react";
import NewProduct from "./components/admin/NewProduct";

import ProductsAdmin from "./components/admin/ProductsAdmin";

const App = () => {
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const tokenstorge = localStorage.getItem("token");
  const [role,setRole] = useState("")

  return (
    <>
      <div className="App">
        <h1>Welcome To App</h1>

        <Navigation
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setToken={setToken} role={role}
        />

        <Routes>
          <Route path="/register" element={<Register />} />

          <Route
            path="/login"
            element={
              <Login setToken={setToken} setIsLoggedIn={setIsLoggedIn} setRole={setRole} />
            }
          />

          <Route path="/products" element={<Products token={tokenstorge} />} />

          <Route path="/newproduct" element={<NewProduct token={tokenstorge} />} />

          <Route
            path="/adminproducts"
            element={<ProductsAdmin token={tokenstorge} />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
