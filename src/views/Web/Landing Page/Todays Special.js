import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";
import foods from "../Data For App/foods";
import { useNavigate } from "react-router-dom";

const Todaysspecial = () => {

  const navigate = useNavigate()
  const [expensiveFoods, setExpensiveFoods] = useState([]);

  useEffect(() => {
    const picturefood = foods.filter(fd => fd.price > 300);
    const limitedExpensiveFoods = picturefood.slice(0, 3);
    setExpensiveFoods(limitedExpensiveFoods);
    console.log('expensive foods:', expensiveFoods);
  }, []);


  const handleImgClick = (code) => {
    navigate(`/admin/viewdetails/${code}`);
  }
  return (
    <div className="mt-5">
      <Row className="h1 d-flex text-center">
        <Col sm={4}>
        </Col>
        <Col sm={4}>
          <span>Today's Special</span>
        </Col>
        <Col sm={4}>
        </Col>
      </Row>
      <div className="d-flex justify-content-center ">
        <Col sm={2}>
          <hr className="my-0 mb-4 border-danger" />
        </Col>
      </div>
      <Row className="d-flex justify-content-center mx-6">
        {expensiveFoods.map((food, index) => (
          <Col sm={4} className="mx-0" key={index}>
            <img onClick={() => handleImgClick(food.code)} src={food.img} alt="okay" style={{ width: "100%", height: "300px", objectFit: "cover" }} />

            <div className="carousel-caption">
              <p onClick={() => handleImgClick(food.code)}
                className='text-white'
                style={{ fontSize: "30px", textShadow: '2px 2px 4px #000000' }}>
                {food.name}
              </p>
              
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Todaysspecial;
