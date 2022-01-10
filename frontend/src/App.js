import React from "react";
import "./App.css";
import {Routes,Route,Link} from "react-router-dom"
import Navigation from "./components/Navigation";
import Register from "./components/Register";


const  App = () => {
  return (
    <>
    <div className="App">
      <h1>Welcome To App</h1>

 <Navigation/> 

<Routes>

<Route path="/register" element = {<Register/>} />




</Routes>

</div>

    </>
  );
}

export default App;
