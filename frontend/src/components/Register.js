import react, { useState } from "react";

import axios from "axios";


const Register = ()=> {

const [message,setMessage] = useState("")

const [first,setFirst] = useState("");
const [last,setLast] = useState("");
const [age,setAge] = useState(0)

const [country,setCountry] = useState("");

const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const userRegister = {
    firstName: first,
    lastName: last,
    age: age,
    country: country,
    email: email,
    password: password,

}








return (
<>
<input type="text"  placeholder="First Name" onChange={(e)=>{

    setFirst(e.target.value)
}}></input>

<input type="text"  placeholder="Last Name" onChange={(e)=>{
    setLast(e.target.value)
}}></input>

<input type="number"  placeholder="Age" onChange={(e)=>{
setAge(e.target.value)
}}></input>

<input type="text"  placeholder="Country" onChange={(e)=>{
setCountry(e.target.value)
}}></input>

<input type="email"  placeholder="E-mail"  onChange={(e)=>{
  setEmail(e.target.value)  
}}></input>

<input type="password"  placeholder="password"  onChange={(e)=>{
 setPassword(e.target.value)   
}}></input>



<button onClick={()=>{
    axios
    .post("http://localhost:5000/users",userRegister)
    .then((result)=>{
       console.log(result);
    setMessage(result.data.message);
    })
    .catch((err)=>{
        setMessage(err.response.data.message)
    })
}}>Register</button>
    {message}

</>





)




}


export default Register
