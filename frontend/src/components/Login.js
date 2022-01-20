import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setIsLoggedIn, setIsAdmin }) => {
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
        {/* <img
          src="https://drive.google.com/uc?id=1O_hDUSGaGcdL-gi_VUBEoWSX8nQQW15N"
          alt="image"
        /> */}

        <p className="loginWord">Login</p>

        <label for="email" className="emailLabel">
          {" "}
          Email
        </label>
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="loginEmail"
        ></input>

        <label for="password" className="passwordLabel">
          Password
        </label>

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="loginPassword"
        ></input>

        <button
          onClick={() => {
            axios
              .post("http://localhost:5000/login", userLogin)
              .then((result) => {
                setIsAdmin(result.data.role === "admin");

                setToken(result.data.token);
                localStorage.setItem("token", result.data.token);
                setIsLoggedIn(true);

                if (result.data.role === "admin") {
                  navigate("/adminproducts");
                } else {
                  navigate("/products");
                }

                console.log(result.data.role);
              })
              .catch((err) => {
                console.log(err.response);
              });
          }}
          className="loginButton"
        >
          Login
        </button>
      </div>

<div className="imageGif">
      <img
        src="https://drive.google.com/uc?id=1IWCez46wuaGc5jJr29Fqs1HLAEkoM1iy"
        alt="image"
      />
      </div>
    </>
  );
};

export default Login;
