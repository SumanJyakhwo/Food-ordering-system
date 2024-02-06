import React, { useEffect, useState } from "react";
import Topline from "../Header-Footer/Topline";
import Search from "../Header-Footer/Search";
import Navbar from "../Header-Footer/Navbar";
import SearchItem from "./SearchItem";

const SearchPage = () => {
  return (
    <React.Fragment>
      <div className="page-content bg-secondary ">
        <div>
          <Topline />
          <Search />
          <Navbar />
          <SearchItem/>
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchPage;
