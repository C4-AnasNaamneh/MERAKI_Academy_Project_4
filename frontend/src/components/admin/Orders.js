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
        console.log(result.data);
      })
      .catch((err) => {
        setMessage(err.response);
      });
  };

  return (
    <>
      <div className="orders">
        {orders &&
          orders.map((element, i) => {
            console.log("element", element);
            console.log("element", element._id);
            return (
              <div key={i} className="ordersContainer">
               { console.log(element.product_id)}
                {/* <p>{element.product_id}</p> */}
                <p>{element.user_id.firstName}</p>
                <p>{element.user_id.lastName}</p>
                <p>{element.user_id.email}</p>

                <p>{element.totalPrice}$</p>
              </div>
            );
          })}

        {/* <button onClick={getAllOrders}>GetAllOrders</button> */}
      </div>
    </>
  );
};

export default Orders;
