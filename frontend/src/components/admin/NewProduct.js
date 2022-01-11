import React from "react";
import axios from "axios";
import { useState } from "react";
const NewProduct = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
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
        setMessage(result.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <>
      <p>New Product</p>


      <input
        typr="text"
        placeholder="image"
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
        }}
      ></input>
      <br></br>
      <textarea
        type="text"
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <br></br>
      <input
        type="text"
        placeholder="Price"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      ></input>

      <br></br>
      <button onClick={createNewProduct}>Add Product</button>
      {message}
    </>
  );
};

export default NewProduct;
