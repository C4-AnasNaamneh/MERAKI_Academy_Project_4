import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setToken,setIsLoggedIn}) => {

    const navigate = useNavigate()



  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const userLogin = { 
      email: email,
      password: password

};

  return (
    <>

<p>Login</p>

      <input
        type="email"
        placeholder="Email address"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {

          axios
          .post("http://localhost:5000/login", userLogin).then((result)=>{
            setToken(result.data.token);
            setIsLoggedIn(true);

            navigate("/products")
          })
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
