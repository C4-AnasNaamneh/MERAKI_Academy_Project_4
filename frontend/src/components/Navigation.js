import React from "react";
import {Routes,Route,Link} from "react-router-dom"


const Navigation = ({isLoggedIn}) =>{

return (
<>
<div className="navigation">

 {isLoggedIn ?  (
<>
<Link to="/products">Products</Link>

<Link to="/newproduct">New Products</Link>

<Link to="/cart">Cart</Link>
</>

 ): (
<>
 <Link to="/register">Register</Link>
<Link to="/login">Login</Link>
</>
)

 }


</div>
</>


)


}


export default Navigation;