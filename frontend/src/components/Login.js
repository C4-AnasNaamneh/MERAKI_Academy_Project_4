import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setIsLoggedIn,setRole }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  const userLogin = {
    email: email,
    password: password,
  };

  return (
    <>
      <div className="login">
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
              .post("http://localhost:5000/login", userLogin)
              .then((result) => {
                // console.log(result.data.role);
              setRole(result.data.role)
                   
                
                setToken(result.data.token);
                localStorage.setItem("token", result.data.token);
                setIsLoggedIn(true);

                navigate("/products");
              });
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
