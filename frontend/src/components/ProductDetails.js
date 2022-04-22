import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";
const ProductDetails = ({ token }) => {
  const [details, setDetails] = useState([]);
  const [message, setMessage] = useState("");

  const { id } = useParams();

  const getProductById = () => {
    axios
      .get(`http://localhost:5000/products/${id}`, {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      })
      .then((result) => {
        setDetails(result.data.result);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  useEffect(() => {
    getProductById();
  }, []);

  return (
    <>
      <div className="productsDetails">
        {details &&
          details.map((element) => (
            <>
              <div key={element._id} className="productsDetailsImg">
                <img src={element.img} className="productDetailsImg" />
              </div>

              <div className="productsDetailsText">
                <p> {element.title}</p>
                <p>{element.description}</p>
                <p>{element.price}$</p>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default ProductDetails;
