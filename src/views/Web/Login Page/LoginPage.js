import React, { useEffect, useState } from "react";
import Topline from "../Header-Footer/Topline";
import Search from "../Header-Footer/Search";
import Navbar from "../Header-Footer/Navbar";
import LoginContent from "./LoginContent";
import Footer from "components/Footers/AdminFooter";
import FooterPage from "../Header-Footer/Footerpage";

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="page-content bg-secondary ">
        <div>
          <Topline />
          <Search />
          <Navbar />
          <LoginContent/>
        
         {/* <FooterPage/> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
