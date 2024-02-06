import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Input, Row, Button } from "reactstrap";
import Swal from "sweetalert2";
const Search = () => {
  const [search, setSearch] = useState("Search Product")


  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/admin/site')
  }


  const handleCartClick = () => {
    navigate('/admin/cart')
  }

  const handleTextChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (search) => {
    if (search == "Search Product") {
      Swal.fire({
        icon: "error",
        title: "Enter Search Keywords",
        text: "Please enter any word to get search results.",
      });
    } else {
      
      navigate(`/admin/search/${search.trim()}`);
    }
  };
  




  return (
    <div className="bg-white">
      <Row className="pt-2 border-bottom border-dark-muted mx-auto">
        <Col md={1}></Col>
        <Col xs={3} sm={2} md={2}>
          <div >
            <h1 onClick={handleGoHome} style={{ cursor: 'pointer' }}>Logo</h1>
          </div>
        </Col>
        <Col xs={6} sm={7} md={7} className="d-flex " style={{ height: "100%" }}>
          <Input className="rounded-0" placeholder={search} onChange={handleTextChange} />
          <Button onClick={() => handleSearch(`${search}`)} className="bg-primary text-white border-0 rounded-0">Search</Button>
        </Col>
        <Col xs={3} sm={2} >
          <div className="d-flex my-2 text-right ">
            <i onClick={handleCartClick} className=" ni ni-cart pr-3" style={{ fontSize: '30px' }} />
            <h3>$256.6</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
