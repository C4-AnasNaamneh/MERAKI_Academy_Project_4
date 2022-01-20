import react, { useState } from "react";

import axios from "axios";

const Register = () => {
  const [message, setMessage] = useState("");

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [age, setAge] = useState(0);

  const [country, setCountry] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const userRegister = {
    firstName: first,
    lastName: last,
    age: age,
    country: country,
    email: email,
    password: password,
  };

  return (
    <>
      <div className="register">
        <p className="registerWord">Register</p>


        <label for="text" className="firstLabel"> First Name</label>


        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFirst(e.target.value);
          }} className="firstName"
        ></input> 

<label for="text" className="lastLabel"> Last Name</label>


        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLast(e.target.value);
          }} className="lastName"
        ></input>

<label for="text" className="ageLabel">Age</label>


        <input
          type="text"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }} className="age"
        ></input>

<label for="text" className="countryLabel">  Country</label>

        <input
          type="text"
          placeholder="Country"
          onChange={(e) => {
            setCountry(e.target.value);
          }} className="country"
        ></input>

<label for="email" className="emailLabel"> Email</label>

        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }} className="registerEmail"
        ></input>

<label for="password" className="passwordLabel"> Password</label>


        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }} className="registerPassword"
        ></input>

        <button
          onClick={() => {
            axios
              .post("http://localhost:5000/users", userRegister)
              .then((result) => {
                setMessage(result.data.message);
              })
              .catch((err) => {
                setMessage(err.response.data.message);
              });
          }} className="registerButton"
        >
          Register
        </button>
        {message}
      </div>
    </>
  );
};

export default Register;
