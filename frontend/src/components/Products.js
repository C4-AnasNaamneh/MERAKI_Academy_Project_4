import React, { useEffect, useState } from "react";

import axios from "axios";

const localStorage = window.localStorage;

const Products = ({ token }) => {
  // const [img, setImg] = useState("");
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [price, setPrice] = useState(0);

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


    //let count = 0

//     cart.forEach((element, i) => {
//       //console.log(i * element.price);
//      const num = parseInt(element.price);
//       //console.log(i * element.price);
 
//       count += num 

// console.log(count);

//       return count;
//     });
  
  };

  return (
    <>
      <div className="products">
        {/* <p>Products</p> */}
        {/* <button onClick={getAllProducts}>GetAllProducts</button> */}

        {products &&
          products.map((element) => (
            <>
              <div key={element._id} className="productsConatiner">
                <img src={element.img} className="productsImg" />

                <div className="ppp">
                  <p className="productsTitle">{element.title}</p>
                  <p>{element.description}</p>
                  <p className="productsPrice">{element.price}$</p>
                  <button
                    onClick={() => AddToCart(element)}
                    className="addToCartButton"
                  >
                    {/* Add to Cart */}

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
