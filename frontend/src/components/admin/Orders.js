import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react/cjs/react.development";

const Orders = ({ check, token }) => {
  //console.log(check);

  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  console.log(orders);




  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = () => {
    axios
      .get("http://localhost:5000/orders", {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((result) => {
        setOrders(result.data);
        //console.log(result.data);
      })
      .catch((err) => {
        setMessage(err.response);
      });
  };

  return (
    <>
      {orders &&
        orders.map((element) => {
          console.log("element",element);
          console.log("element",element._id);
        return   <div key={element._id} className="productsConatiner">
             <p>{element.product_id.title}</p>
            <p>{element.user_id.firstName}</p>
            <p>{element.totalPrice}</p>
          </div>;
        })}

      <button onClick={getAllOrders}>GetAllOrders</button>
    </>
  );
};

export default Orders;
