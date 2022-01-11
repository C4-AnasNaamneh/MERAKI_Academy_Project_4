import react from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const ProductsAdmin = ({token}) => {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");


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

  return (
    <>
      <p>ProductsAdmin</p>
      <button onClick={getAllProducts}>GetAllProducts</button>

      {products &&
        products.map((element) => (
          <>
            <img src={element.img} />
            <p>{element.title}</p>
            <p>{element.description}</p>
            <p>{element.price}</p>
            {message}
          </>
        ))}
    </>
  );
};

export default ProductsAdmin;