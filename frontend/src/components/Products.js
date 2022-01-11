import React, { useState } from "react";

import axios from "axios";

const Products = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const getAllProducts = ({ token }) => {
    axios
      .get("http://localhost:5000/products", {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((result) => {
        console.log(result);
         setProducts(result.data);
      })

      //لسا بشوف شو في بالداتا
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <>
      <p>Products</p>
      <button onClick={getAllProducts}>GetAllProducts</button>

      {products && products.map((element)=>(
<>
<img src={element.img}/>
<p>{element.title}</p>
<p>{element.description}</p>
<p>{element.price}</p>
</>
  ))
      
      
      
      
      }
    </>
  );
};

export default Products;
