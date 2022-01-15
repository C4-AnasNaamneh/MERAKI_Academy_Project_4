import react from "react";
import { useState } from "react/cjs/react.development";

const Search = () => {
    const [search,setSearch] = useState([])
  return (
    <>
      <input type="text" placeholder="Search..." onChange={(e)=>{
      setSearch(e.target.value)
      }} className="search"></input>

      <button onClick className="searchButton">Search</button>
    </>
  );
};

export default Search;
