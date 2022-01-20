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
      .delete(`http://localhost:5000/products/${id}`)
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
      <div className="adminProducts">
        {/* <p>ProductsAdmin</p> */}
        {/* <button onClick={getAllProducts}>GetAllProducts</button> */}

        {products &&
          products.map((element) => (
            <>
              <div className="adminProductsContainer">
                <img src={element.img} className="adminProductsImg" />
                <p>{element.title}</p>
                <p>{element.description}</p>
                <p>{element.price}$</p>

                <input
                  type="text"
                  placeholder="update image"
                  onChange={(e) => {
                    setImg(e.target.value);
                  }}
                  className="updateImg"
                ></input>
                <br></br>

                <input
                  type="text"
                  placeholder="update title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="updateTitle"
                ></input>
                <br></br>
                <textarea
                  type="text"
                  placeholder="update Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className="updateDescription
              "
                ></textarea>
                <br></br>

                <input
                  type="text"
                  placeholder="update price"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  className="updatePrice"
                ></input>
                <br></br>

                <button
                  onClick={() => {
                    deleteProductById(element._id);
                  }}
                  className="deleteButton"
                >
                  <i class="fas fa-times"></i>
                </button>
                <button
                  onClick={() => {
                    updateProductById(element._id);
                  }}
                  className="updateButton"
                >
<i class="fas fa-edit"></i>

</button>
                {/* {message} */}
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default ProductsAdmin;
