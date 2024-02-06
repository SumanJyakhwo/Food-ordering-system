import React, { useEffect, useState } from "react";
import {
    MDBIcon,
    MDBRipple,
    MDBBtn,
} from "mdb-react-ui-kit";
import "./ecommerce-category-product.css";
import { Button, Card, CardBody, CardHeader, CardImg, Col, Container, Input, Row } from "reactstrap";
import foods from "../Data For App/foods";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
function ItemDetail() {

    const [addedToCart, setAddedToCart] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();


    const codeObject = useParams();
    const loadingID = codeObject.code;




    console.log('loading id is ', loadingID)

    const [currentfood, setCurrentFood] = useState({})


    useEffect(() => {
        const food = foods.find(f => f.code === parseInt(loadingID));
        if (food) {
            setCurrentFood(food);
            console.log('Foods:', food)
        }
    }, [])

    const handleGoHome = () => {
        navigate('/admin/site')
    }


    const handleAddToCart = () => {
        if (addedToCart == false) {

            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            cartItems.push(currentfood);
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            Swal.fire({
                icon: "success",
                title: "Order Placed Successfully",
                text: "Thank you for your order!",
            });
            setAddedToCart(!addedToCart)
        }
        else {

            navigate('/admin/cart')
        }

    };

    const plusHandler = () => {
        setQuantity(quantity + 1)
    }

    const minusHandler = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
        else {

        }
    }




    return (
        <div className="mx-6 my-4 ">
            <Card>
                <CardHeader>
                    <span>Item Details</span>
                </CardHeader>

                <CardBody>


                    <Row>
                        <Col sm={6} >
                            <img

                                src={currentfood.img}
                                className="w-100"
                                style={{ objectFit: 'cover', height: "500px" }}
                            />
                        </Col>
                        <Col sm={6}>
                            <h1>{currentfood.name}</h1>
                            <div className="d-flex h2 flex-row">
                                <div className="text-danger mb-1 me-2">
                                    {[...Array(currentfood.rating)].map((_, index) => (
                                        <MDBIcon key={index} fas icon="star" />


                                    ))}
                                </div>
                                <count />
                                <span className="ml-2">{currentfood.count} Reviews</span>
                            </div>
                            <div className="mt-1 mb-0 text-muted large">
                                <span>{currentfood.kind} Item</span>
                                <span className="text-primary"> • </span>
                                <span>Local Ingredients</span>
                                <span className="text-primary"> • </span>
                                <span>
                                    Properly Cooked
                                    <br />
                                </span>
                            </div>
                            <div className="mb-2 text-muted large">

                                <span className="text-primary"> • </span>
                                <span>Serving size: {currentfood.serving}</span>
                                <span className="text-primary"> • </span>
                                <span>
                                    Enough for {currentfood.enoughFor} person
                                    <hr className="my-2" />
                                </span>
                            </div>
                            <p className=" mb-4 mb-md-0">
                                {currentfood.description}
                            </p>
                            <hr className="my-2" />
                            <div className="d-flex align-items-center">
                                <Col sm={8}>
                                    <div className="d-flex flex-row align-items-center mb-1">
                                        <h4 className="mb-1 h2 me-1 mr-2">Rs {currentfood.price}</h4>
                                        <span className="text-danger">
                                            <s>Rs {currentfood.price + 20}</s>
                                        </span>
                                    </div>
                                    <h3 className="text-success">Free Delivery in Kathmandu</h3>
                                </Col>
                                < Col sm={4} className="d-flex align-items-center">

                                    <Button size="sm" color="primary" className="mr-0" onClick={minusHandler}>
                                        <MDBIcon fas icon="minus" />
                                    </Button>

                                    <Input value={quantity} className="mx-2 text-center" />

                                    <Button size="sm" color="primary" onClick={plusHandler}>
                                        <MDBIcon fas icon="plus" />
                                    </Button>

                                </Col>
                            </div>
                            <div className="d-flex flex-column mt-4">
                                <Button onClick={handleAddToCart} color="primary" size="lg">
                                    {addedToCart ? "View Cart" : "Add to Cart"}
                                </Button>
                                <Button onClick={handleGoHome} outline color="success" size="lg" className="mt-4">
                                    Go Back to Homepage
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </CardBody>

            </Card>

        </div>
    );
}

export default ItemDetail;