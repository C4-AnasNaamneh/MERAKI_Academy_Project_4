import React, { useEffect, useState } from "react";
import axios from "axios";

const AddToCart = ({ token, setCheck }) => {
  let [store, setStore] = useState([]);
  const [order, setOrder] = useState([]);
  const [product_id, setProduct_id] = useState("");
  const [user_id, setUser_id] = useState("");
  let [totalPrice, setTotalPrice] = useState(0);


  
  store = JSON.parse(localStorage.getItem("CartArray"));
  const deleteProduct = (id) => {
    const cartFilter = store.filter((item) => item._id !== id);
    console.log(cartFilter);
    if (cartFilter) {
      localStorage.setItem("CartArray", JSON.stringify(cartFilter));
      setStore(JSON.parse(localStorage.getItem("CartArray")) || []);
    }
  };

  // console.log(order);

  const checkOut = async () => {
    const price = store.reduce(function (accumulator, element, index) {
      //console.log(store);
      console.log("acc", accumulator);
      // console.log(typeof parseInt(element.price));

      return accumulator + parseInt(element.price);
    }, 0);
    setTotalPrice(price);
    totalPrice = price;

    await axios
      .post(
        `http://localhost:5000/orders/`,
        { totalPrice, product_id: store },
        {
          headers: {
            Authorization: `Bearer  ${token}`,
          },
        }
      )
      .then((result) => {
        console.log("result.data", result);
        setOrder(result.data);
        setCheck([result.data]);

        // =>

        // console.log(order);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>

      <div className="products">
        {/* <p>Cart</p> */}
<div className="orderSummary">
<p>Order Summary</p>
<p>Total Price = {totalPrice}$</p>

<button onClick={checkOut} className="checkoutButton">Checkout</button>

</div>




      



        {store.map((element) => (
          <>
            <div key={element._id} className="productsConatiner">
              <img src={element.img} className="productsImg" />
              <p className="productsTitle">{element.title}</p>
              <p>{element.description}</p>
              <p className="productsPrice">{element.price}$</p>

              <br></br>

              <button
                onClick={() => {
                  deleteProduct(element._id);
                }}
                className="deleteFromCartButton"
              >
                X
              </button>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default AddToCart;
