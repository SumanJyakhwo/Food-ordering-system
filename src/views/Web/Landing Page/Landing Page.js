import React, { useEffect, useState } from "react";

import Topline from "../Header-Footer/Topline";
import Search from "../Header-Footer/Search";
import Navbar from "../Header-Footer/Navbar";
import PopularProduct from "./Popular Products";
import BestSeller from "./Best Seller";
import Footer from "../Header-Footer/Footerpage";
import Todaysspecial from "./Todays Special";
import Carouselcomponent from "./Carousel Page";
import Testimonals from "../Header-Footer/Testimonals";
import Housespecial from "./House Special";
const Landingpage = () => {
  return (
    <React.Fragment>
      <div className="page-content bg-secondary ">
        <div>
          <Topline />
          <Search />
          <Navbar />
          <Carouselcomponent />
          <Todaysspecial />
          <PopularProduct/>
          <Housespecial/>
          <BestSeller/>
          <Testimonals/>
         <Footer/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landingpage
;
