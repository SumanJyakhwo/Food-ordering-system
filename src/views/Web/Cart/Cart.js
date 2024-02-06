import React, { useEffect, useState } from "react";



import Cartcomponent from "./Cartitems";
import Topline from "../Header-Footer/Topline";
import Search from "../Header-Footer/Search";
import Navbar from "../Header-Footer/Navbar";
import FooterPage from "../Header-Footer/Footerpage";
import PopularProduct from "../Landing Page/Popular Products";
import Todaysspecial from "../Landing Page/Todays Special";
import Housespecial from "../Landing Page/House Special";
const Cart = () => {
  return (
    <React.Fragment>
      <div className="page-content bg-secondary">
        <div>
          <Topline />
          <Search />
          <Navbar />
          <Cartcomponent />
          {/* <Todaysspecial/> */}
          {/* <PopularProduct/> */}
          <Housespecial/>
          <FooterPage/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cart;
