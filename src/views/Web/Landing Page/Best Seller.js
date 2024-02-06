import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row } from "reactstrap";
import foods from "../Data For App/foods";
import { useNavigate } from "react-router-dom";

const BestSeller = () => {
    const [popularFoods, setPopularFoods] = useState([])
  

    const navigate = useNavigate();

    useEffect(() => {
        const popFood = foods.filter(fd => fd.bestSeller == true);
        setPopularFoods(popFood);
        console.log("Popularfoods", popularFoods)
        
 
        

    }, []);

    const handleImgClick = (code) => {
        navigate(`/admin/viewdetails/${code}`);
    }

  
    return (
        <div className=" mt-6  mb-4">
            <Row className="h1 d-flex text-center">
                <Col sm={4}>
                </Col>
                <Col sm={4}>
                    <span>Best Seller</span>
                </Col>

                <Col sm={4}>
                    
                </Col>

            </Row>
            <div className="d-flex justify-content-center ">
                <Col sm={2}>
                    <hr className="my-0 border-danger" />
                </Col>
            </div>
            <Row className="d-flex justify-content-center mx-6 mt-4">

                {popularFoods.map((food, index) => (
                    <Col sm={3} className="mx-0" key={index}>
                        <Card>
                            <img onClick={() => handleImgClick(food.code)}
                                src={food.img} alt="okay"
                                style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                            <CardBody className="text-center">
                                <div>
                                    <span onClick={() => handleImgClick(food.code)} className='text-dark text-xl'>
                                        {food.name}
                                    </span>
                                </div>
                                <CardSubtitle className="mb-2">
                                    <div className="d-flex my-2 justify-content-center">
                                        <span className="text-dark mr-2">Rs {food.price}</span>
                                        <span className="text-danger">
                                            <s>Rs {food.price + 20}</s>
                                        </span>
                                    </div>
                                </CardSubtitle>
                                <Button className="bg-primary text-white rounded-0 border-0">
                                    Add to Cart
                                </Button>
                            </CardBody>

                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}
export default BestSeller;