import React, { useEffect, useState } from "react";




import Topline from "../Header-Footer/Topline";
import Search from "../Header-Footer/Search";
import Navbar from "../Header-Footer/Navbar";
import Paymentcomponent from "./Paymentcomponent";
import FooterPage from "../Header-Footer/Footerpage";
import PaymentcomponentCopy from "./Paymentcomponent copy";
const Payment = () => {
  return (
    <React.Fragment>
      <div className="page-content bg-secondary">
        <div>
          <Topline />
          <Search />
          <Navbar />
          <PaymentcomponentCopy />
          <FooterPage/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payment;
