import React, { useEffect, useState } from "react";

import axios from "axios";

const localStorage = window.localStorage;

const Products = ({ token }) => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  // let [cart, setCart] = useState([]);

  // let cart = [];

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    axios
      .get("http://localhost:5000/products", {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((result) => {
        setProducts(result.data);
      })

      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  const AddToCart = (element) => {
    const cart = JSON.parse(localStorage.getItem("CartArray")) || [];
    cart.push(element);
    localStorage.setItem("CartArray", JSON.stringify(cart));
  };

  return (
    <>
      <div className="products">
        <p>Products</p>
        {/* <button onClick={getAllProducts}>GetAllProducts</button> */}

        {products &&
          products.map((element) => (
            <>
              <div key={element._id} className="productsConatiner">
                <img src={element.img} className="productsImg" />
                <p>{element.title}</p>
                <p>{element.description}</p>
                <p>{element.price}</p>
                <button
                  onClick={() => AddToCart(element)}
                  className="addToCartButton"
                >
                  Add to Cart
                </button>
                <br></br>
                {message}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Products;
