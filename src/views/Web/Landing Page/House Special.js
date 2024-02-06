

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import foods from "../Data For App/foods";

const Housespecial = () => {


  const [houseSpecials, setHouseSpecials] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const specialFood = foods.filter(fd => fd.special == true);
    setHouseSpecials(specialFood);
    console.log("House  special foods", houseSpecials)




  }, []);

  const handleImgClick = (code) => {
    navigate(`/admin/viewdetails/${code}`);
  }
  return (
    <div className="my-6">
      <Row className="h1 d-flex text-center">
        <Col sm={4}>
        </Col>
        <Col sm={4}>
          <span>House Specials</span>
        </Col>
        
      </Row>
      <div className="d-flex justify-content-center ">
        <Col sm={2}>
          <hr className="my-0 border-danger" />
        </Col>
      </div>

      <Row className="d-flex justify-content-center mx-6 mt-3">
      {houseSpecials.map((food, index) => (
                    <Col sm={6} className="mx-0" key={index}>
                        
                            <img onClick={() => handleImgClick(food.code)}
                                src={food.img} alt="okay"
                                style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                            

                        
                    </Col>
                ))}
      </Row>
    </div>
  );
};

export default Housespecial;
