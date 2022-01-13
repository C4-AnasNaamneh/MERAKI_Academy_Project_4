import React, { useEffect, useState } from "react";
const AddToCart = () => {
  let [store, setStore] = useState([]);

  store = JSON.parse(localStorage.getItem("CartArray"));
  const deleteProduct = (id) => {
    const cartFilter = store.filter((item) => item._id !== id);
    console.log(cartFilter);
    if (cartFilter) {
      localStorage.setItem("CartArray", JSON.stringify(cartFilter));
      setStore(JSON.parse(localStorage.getItem("CartArray")) || []);
    }
  };

  return (
    <>
      <div className="products">
        <p>Cart</p>

        {store.map((element) => (
          <>
            <div key={element._id} className="productsConatiner">
              <img src={element.img} className="productsImg" />
              <p>{element.title}</p>
              <p>{element.description}</p>
              <p>{element.price}</p>
              <br></br>
              {
                <button
                  onClick={() => {
                    deleteProduct(element._id);
                  }}
                  className="deleteButton"
                >
                  X
                </button>
              }
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default AddToCart;
