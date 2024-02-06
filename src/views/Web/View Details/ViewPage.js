import React, { useEffect, useState } from "react";

import ItemDetail from "./Itemdetail";
import Topline from "../Header-Footer/Topline";
import Search from "../Header-Footer/Search";
import Navbar from "../Header-Footer/Navbar";
import FooterPage from "../Header-Footer/Footerpage";
import Housespecial from "../Landing Page/House Special";
const ViewDetails = () => {
  return (
    <React.Fragment>
      <div className="page-content bg-secondary">
        <Topline/>
        <Search/>
        <Navbar/>
        <ItemDetail />
        <Housespecial/>
        <FooterPage/>
      </div>
    </React.Fragment>
  );
};

export default ViewDetails;
