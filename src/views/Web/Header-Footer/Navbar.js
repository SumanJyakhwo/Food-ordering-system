import React from "react";
import { Col, Input, Row, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Row className="pt-3 pb-2 bg-white text-center mx-auto">
        <Col xs={0} sm={2} lg={3}></Col>

        <Col xs= {12} sm={8} lg={6} className="d-flex hover-color-danger">
        
          <NavLink to="/" className="nav-link d-flex flex-grow-1">
            <p className="h3">Home</p>
            <i className="ni ni-bold-down ml-1 mt-1"/>
          </NavLink>
          <NavLink to="/about" className="nav-link d-flex flex-grow-1">
          <p className="h3">Categories</p>
            <i className="ni ni-bold-down ml-1 mt-1"/>
            
          </NavLink>
          <NavLink to="/pages" className="nav-link d-flex flex-grow-1">
          <p className="h3">Promos</p>
            <i className="ni ni-bold-down ml-1 mt-1"/>
            
          </NavLink>
          <NavLink to="/shop" className="nav-link d-flex flex-grow-1">
          <p className="h3">Delivery</p>
            <i className="ni ni-bold-down ml-1 mt-1"/>
            </NavLink>
          
          <NavLink to="/contact" className="nav-link d-flex flex-grow-1">
          <p className="h3">Contact</p>
            
            </NavLink>
        </Col>
        <Col xs={0} sm={2} lg={3}></Col>
      </Row>
    </div>
  );
};

export default Navbar;
