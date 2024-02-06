import {
    MDBBtn,
    MDBIcon,

    MDBTooltip,

} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Card, CardHeader, CardBody, Input, Button, ModalBody, Modal } from "reactstrap";
import LoginContent from "../Login Page/LoginContent";

export default function Cartcomponent() {
    
    const storedSignedInStatus = JSON.parse(localStorage.getItem('loggedIn'))?.signedInStatus;
    
    
   

    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [signedIn, setSignedIn] = useState(storedSignedInStatus)
    console.log("signedIn variable has value",signedIn)
    const [modal, setModal] = useState(false);

   




    useEffect(() => {
        // Retrieve cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
    }, []);

    const navigate = useNavigate()

 

   


    const handleCheckout = () => {
        navigate(`/admin/pay`)
    }


    const [successfulSignIn, setSuccessfulSignIn] = useState(false);

  
    const toggleModal = () => setModal(!modal);
  
    // Function to handle successful sign-in
    // const handleSignInSuccess = () => {
    //   setModal(false);
    // };
  





    const plusHandler = (itemId) => {
        if (cartItems.id === itemId) {
            setQuantity(quantity + 1);
        } else {

        }
    }

    const minusHandler = (itemId) => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    };

    return (

        <>
            <div className="mx-6 my-4">
                <Row>
                    <Col sm={8}>
                        <Card>
                            <CardHeader>
                                <span>Cart - {cartItems.length} items</span>

                            </CardHeader>

                            <CardBody>

                                {cartItems.map((item, index) => (
                                    <Row key={index}>

                                        <Col sm={4}>
                                            <img
                                                src={item.img}
                                                className="w-100"
                                                style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                                        </Col>
                                        <Col sm={5}>
                                            <p>
                                                <strong>{item.name}</strong>
                                            </p>
                                            <p>Kind: {item.kind}</p>
                                            <p>Serving: {item.serving}</p>
                                            <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                                                title="Remove item">
                                                <MDBIcon fas icon="trash" />
                                            </MDBTooltip>

                                            <MDBTooltip wrapperProps={{ size: "sm", color: "danger" }} wrapperClass="me-1 mb-2"
                                                title="Move to the wish list">
                                                <MDBIcon fas icon="heart" />
                                            </MDBTooltip>
                                        </Col>
                                        <Col sm={3}>
                                            <div className="d-flex mb-2">
                                                <Button size="sm" className="mr-0 bg-primary border-0" onClick={() => minusHandler(item.id)}>
                                                    <MDBIcon fas icon="minus" />
                                                </Button>

                                                <Input value={quantity} className="mx-2 text-center" />

                                                <Button size="sm" onClick={() => plusHandler(item.id)} className="bg-primary border-0">
                                                    <MDBIcon fas icon="plus" />
                                                </Button>
                                            </div>

                                            <p className="text-start text-center">
                                                <strong>Rs {item.price}</strong>
                                            </p>
                                        </Col>
                                        <hr className="my-7" />
                                    </Row>
                                ))}


                            </CardBody>
                        </Card>

                    </Col>
                    <Col sm={4}>
                        <Card>

                            <CardHeader>
                                <span>Item Summary</span>

                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm={12} className="d-flex justify-content-between align-items-center mx-2">

                                        <div className="flush">Products</div>
                                        <span>Rs 340</span>

                                    </Col>

                                    <Col sm={12} className="d-flex justify-content-between align-items-center mx-2">
                                        <div className="flush">Delivery</div>
                                        <span>Rs 25</span>
                                    </Col>

                                </Row>
                                <hr className="my-4" />
                                <Row  >

                                    <Col sm={12} className="d-flex justify-content-between mx-2 align-items-center ">
                                        <strong>Total amount</strong>

                                        <strong>Rs 365</strong>
                                    </Col>
                                    <span>

                                        <p className="mt--1 mx-4">(including VAT)</p>

                                    </span>


                                    <Button block size="lg" color="primary" onClick={signedIn ? handleCheckout : toggleModal}>
                                        Go to checkout
                                    </Button>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                </Row>
                <Modal isOpen={modal} toggle={toggleModal} centered>
                    <ModalBody>
                        <LoginContent/>
                    </ModalBody>

                </Modal>
            </div>
        </>
    );
}