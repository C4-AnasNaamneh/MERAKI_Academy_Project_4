import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ProductsAdmin = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

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

  const deleteProductById = (id) => {
    axios
      .post(`http://localhost:5000/products/${id}`)
      .then((result) => {
        setMessage(result.data.message);
        getAllProducts();
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  const updateProductById = (id) => {
    axios
      .put(`http://localhost:5000/products/${id}`, {
        img,
        title,
        description,
        price,
      })
      .then((result) => {
        setMessage(result.data.message);
        getAllProducts();
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


<input type="image" placeholder="update image" onChange={(e)=>{
    setImg(e.target.value)
}}></input>

            <input
              type="text"
              placeholder="update title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>

            <input
              type="text"
              placeholder="update Description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></input>

            <input
              type="text"
              placeholder="update price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>

            <button
              onClick={() => {
                deleteProductById(element._id);
              }}
            >
              Remove
            </button>
            <button
              onClick={() => {
                updateProductById(element._id);
              }}
            ></button>
            {message}
          </>
        ))}
    </>
  );
};

export default ProductsAdmin;
