import React from "react";

const Home = () => {
  return (
    <>
      <div className="homeImg">
        <img src="https://www.nicepng.com/png/detail/255-2559542_ecommorce-e-commerce-background-png.png" />

        <div className="about">
          {/* <p>Who We Are</p> */}
          <p>
            <em>Who We Are </em>
          </p>

          <p className="aboutParagraph">
            About E-Buy: Founded in 2022, E-Buy is a full-service, ecommerce and
            interactive agency headquartered in Amman City.
          </p>
        </div>
      </div>
      <footer className="footer">
        <p >Author: Anas Naamneh</p>
        <p >
          <a href="mailto:naamnih.anas@gmail.com">naamnih.anas@gmail.com</a>
        </p>

      


        <p>
          <a href="/">Delivery</a>
        </p>

        <p>
          <a href="/">Terms and Conditions</a>
        </p>

        <p>
          <a href="/">Secure Payment</a>
  
        </p>
        <br/>
      


      </footer>
      <div className="copyRights">
          
          <h1 className="copyRights"> Copyright &#169; 2022 All Rights Reserved by Anas Naamneh</h1>
          </div>


    </>
  );
};

export default Home;
