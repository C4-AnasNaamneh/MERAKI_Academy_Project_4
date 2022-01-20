import React from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import View from "./View";

const Search = ({ token, setView }) => {
  // const [img, setImg] = useState("");

  const [title, setTitle] = useState("");

  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");

  const [search, setSearch] = useState([]);

  const navigate = useNavigate();

  const filteredProducts = () => {
    axios
      .post(
        "http://localhost:5000/search",
        { title: title },
        {
          headers: {
            Authorization: `Bearer  ${token}`,
          },
        }
      )
      .then((result) => {
        setSearch(result.data);
        setView(result.data);
        
      })
      .catch((err) => {
        console.log(err.response);
      });

    navigate("/view");
  // navigate("/search")
  };
  //console.log(search);
  return (
    <>

{search &&
          search.map((element) => (
            <>
              <img src={element.img} className="productsImg" />
              <p>{element.title}</p>
              <p>{element.description}</p>
              <p>{element.price}</p>
            </>
          ))}

<div className="searchDiv">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="search"
      ></input>

      <button onClick={filteredProducts} className="searchButton">
        Search
      </button>
      </div>
    </>
  );
};

export default Search;
