import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router";
const localStorage = window.localStorage;

const Products = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState(0);
  const [id,setId] = useState("")
  const navigate = useNavigate();




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

  const convertToId = (id) => {
    navigate(`/products/${id}`);
  };

  const AddToCart = (element) => {
    const cart = JSON.parse(localStorage.getItem("CartArray")) || [];
    cart.push(element);
    localStorage.setItem("CartArray", JSON.stringify(cart));
  };

  return (
    <>
      <div className="products">
        {products &&
          products.map((element) => (
            <>
              <div key={element._id} className="productsConatiner">
                <img
                  src={element.img}
                  className="productsImg"
                  onClick={()=>{
                    convertToId(element._id)
                  }}
                />

                <div className="ppp">
                  <p className="productsTitle">{element.title}</p>
                  <p className="productsDescription">{element.description}</p>
                  <p className="productsPrice">{element.price}$</p>
                  <button
                    onClick={() => AddToCart(element)}
                    className="addToCartButton"
                  >
                    <i class="fas fa-cart-plus"></i>
                  </button>
                  <br></br>
                  {message}
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Products;
