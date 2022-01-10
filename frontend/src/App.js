import React from "react";
import "./App.css";
import {Routes,Route,Link} from "react-router-dom"
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import { useState } from "react";
const  App = () => {

const [token,setToken] = useState("");
const [isLoggedIn,setIsLoggedIn] = useState(false) 

  return (
    <>
    <div className="App">
      <h1>Welcome To App</h1>

 <Navigation isLoggedIn={isLoggedIn}/> 

<Routes>

<Route path="/register" element = {<Register/>} />


<Route path="/login" element = {<Login setToken={setToken} setIsLoggedIn={setIsLoggedIn}/>} />


<Route path="/products" element={<Products/>}/>

</Routes>

</div>

    </>
  );
}

export default App;
