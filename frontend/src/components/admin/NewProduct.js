import React from "react";
import axios from "axios";
import { useState } from "react";
const NewProduct = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [img, setImg] = useState("");

  const [message, setMessage] = useState("");

  const product = { title, description, price, img };

  const createNewProduct = () => {
    axios
      .post("http://localhost:5000/products", product, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
        setMessage(result.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <>
      <p className="newProduct">New Product</p>


      <input
        type="text"
        placeholder="image" className="newImg"
        onChange={(e) => {
          setImg(e.target.value)
        }}
      ></input>

<br></br>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }} className="newTitle"
      ></input>
      <br></br>
      <textarea
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }} className="newDescription"
      ></textarea>
      <br></br>
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }} className="newPrice"
      ></input>

      <br></br>
      <button onClick={createNewProduct} className="addProductButton">
      <i class="fas fa-plus"></i>



        </button>
      {message}
    </>
  );
};

export default NewProduct;
