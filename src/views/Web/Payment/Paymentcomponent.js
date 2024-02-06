import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow, MDBTooltip, MDBIcon
} from "mdb-react-ui-kit";
import { Row, Col, Card, CardHeader, CardBody, Input, Button, Container, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from "reactstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Paymentcomponent() {
  const [cartItems, setCartItems] = useState([]);


  const [payMethod, setPayMethod] = useState("Select Avaiable Payment Option")
  const [phoneNumber, setPhonenumber] = useState("")
  const [showSummary, setShowSummary] = useState(false);
  const [showPaymentAdd, setShowPayAdd] = useState(false);
  const [showPaymentOptions, setShowPayOptions] = useState(false);

  const [paymentSelected, setPaymentSelected] = useState(false)

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);
  const navigate = useNavigate();
  const handleMore = () => {
    setShowSummary(!showSummary);
  };
  const handleAdd = () => {
    setShowPayAdd(!showPaymentAdd);
  };

  const handleExpand = () => {
    setShowPayOptions(!showPaymentOptions);
  };

  const handlephChange = (e) => {
    setPhonenumber(e.target.value)
  }
  const handleOrderNow = () => {
    if (paymentSelected === false) {
      // Show a sweet alert if the user hasn't selected a payment method
      Swal.fire({
        icon: "error",
        title: "Select Payment Method",
        text: "Please select a payment method before placing the order.",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Order Placed Successfully",
        text: "Thank you for your order!",
      });

      navigate('/admin/site')
    }
  };
  const handlePaymentSelection = () => {
    setPaymentSelected(true)
  }
  const handleGoToCart = () => {
    navigate(`/admin/cart`)
  }
  return (
    <>
      <div className="mx-6 my-4">
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>




            <Card>
              <CardHeader>
                <span>Your Order</span>

              </CardHeader>

              <CardBody>
                {cartItems.map((item, index) => (

                  <Row key={index}>
                    <Col sm={4}>
                      <img
                        src={item.img}
                        className="w-100"
                        style={{ width: "100%", height: "120px", objectFit: "cover" }}
                        />
                    </Col>
                    <Col sm={4}>
                      <p>
                        <strong >{item.name}</strong>
                      </p>
                      <p><strong>Kind: {item.kind}</strong></p>
                    </Col>
                    <Col sm={4}>

                      <p className="mb-2">

                        <strong>Quantity: 1</strong>
                      </p>
                      <p>
                        <strong>Total Price: {item.price}</strong>
                      </p>
                    </Col>

                    <hr className="my-6" color="primary"/>
                  </Row>
                ))}

              </CardBody>
            </Card>

            <Card className="rounded-3">
              <CardHeader className="d-flex justify-content-between align-items-center">
                <p className="fw-bold">Select Your Payment Method</p>

                <Button onClick={handleExpand} size="md" color="primary">
                  <span>+</span>

                </Button>
              </CardHeader>
              {showPaymentOptions && (
                <>
                  <CardBody className="p-4">
                    <p className="fw-bold mb-4 pb-2">Saved Payment Methods:</p>
                    <div className="d-flex flex-row align-items-center mb-4 pb-1">
                      <Col sm={1}>
                        <label>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="male"
                            className="mt-3 mr-4"
                            onClick={handlePaymentSelection}
                          />
                        </label>
                      </Col>
                      <Col sm={3} className="d-flex">
                        <img
                          width={100}
                          className="img-fluid"
                          src="https://th.bing.com/th/id/OIP.iQepp8O2eFRF2wbCmUOs5QHaET?rs=1&pid=ImgDetMain"
                        />
                      </Col>
                      <Col sm={5} className="flex=fill form-outline">
                        <Input
                          id="form1"
                          type="text"
                          size="lg"
                          value="9816312937"
                        />
                      </Col>
                      <Col sm={3}>
                        <a href="#!">Remove card</a>
                      </Col>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4 pb-1">
                      <Col sm={1}>
                        <label>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="male"
                            className="mt-3 mr-4"
                          />
                        </label>
                      </Col>
                      <Col sm={3}>
                        <img
                          width={100}
                          className="img-fluid"
                          src="https://th.bing.com/th/id/R.48364036e4b24bc383de46067c2048ed?rik=o5O5xAG4KbpoQA&pid=ImgRaw&r=0"
                        />
                      </Col>
                      <Col sm={5} className="flex=fill form-outline">
                        <Input
                          id="form1"
                          type="text"
                          size="lg"
                          value="9818720073"
                        />
                      </Col>
                      <Col sm={3}>
                        <a href="#!">Remove card</a>
                      </Col>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4 pb-1">
                      <Col sm={1}>
                        <label>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="male"
                            className="mt-3 mr-4"
                          />
                        </label>
                      </Col>
                      <Col sm={11}>
                        <span>Cash On Delivery</span>
                      </Col>
                    </div>
                    <hr className="mx--3 mb-4" />

                    <div className="d-flex">

                      <p className="fw-bold">
                        Add Payment Method

                      </p>
                      <i onClick={handleAdd} className="ni ni-bold-down mt-1 ml-2" />
                    </div>

                    {showPaymentAdd && (
                      <>
                        <hr className="mx--3 mt-0" />

                        <UncontrolledDropdown style={{ width: '100%' }} direction="down">
                          <DropdownToggle caret color="success" style={{ width: '100%' }}>
                            {payMethod}
                          </DropdownToggle>
                          <DropdownMenu style={{ width: '100%' }}>
                            <DropdownItem disabled style={{ width: '100%' }}>
                              Esewa
                            </DropdownItem>
                            <DropdownItem disabled style={{ width: '100%' }}>
                              Khalti
                            </DropdownItem>
                            <DropdownItem onClick={() => setPayMethod("FonePay")} style={{ width: '100%' }}>
                              FonePay
                            </DropdownItem>
                            <DropdownItem onClick={() => setPayMethod("Debit Card")} style={{ width: '100%' }}>
                              Debit Card
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>


                        <MDBRow className="my-4">
                          <MDBCol size="7">
                            <MDBInput
                              label="Phone Number"
                              id="form4"
                              type="number"
                              size="lg"
                              placeholder="Enter Mobile Number"
                              value={phoneNumber}
                              onChange={handlephChange}
                            />
                          </MDBCol>
                          <MDBCol size="5">
                            <MDBInput
                              label="Password"
                              id="form5"
                              type="password"
                              size="lg"
                              placeholder="Enter Password Here"
                            />
                          </MDBCol>

                        </MDBRow>
                        <Button color="primary" size="lg" block>
                          Add card
                        </Button> </>)}
                  </CardBody>
                </>)}
            </Card>
            <Card>
              <CardHeader className="d-flex justify-content-between align-items-center">
                <span>Show Order Summary</span>

                <Button onClick={handleMore} size="md" color="primary">
                  <span>+</span>
                </Button>
              </CardHeader>

              {showSummary && (
                <CardBody>


                  <Table className="align-items-center " >
                    <thead className="bg-primary text-white">
                      <tr>
                        <th ><p><strong>S.N.</strong></p></th>
                        <th ><p><strong>Name</strong></p></th>
                        <th ><p><strong>Quantity</strong></p></th>
                        <th ><p><strong>Price</strong></p></th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr>
                        <td>1</td>
                        <td><strong>Buff Chowmein</strong></td>
                        <td>2</td>
                        <td>Rs. 190</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td><strong>Chicken Momo</strong></td>
                        <td>2</td>
                        <td>Rs. 150</td>
                      </tr>

                      <tr className="bg-light">
                        <th></th>
                        <th><strong>Total</strong></th>
                        <th></th>
                        <th>Rs. 340</th>
                      </tr>


                    </tbody>
                  </Table>

                </CardBody>
              )}
            </Card>

            <div className="my-4">

              <Button onClick={handleGoToCart} color="success" size="lg" block style={{ fontSize: '1rem' }}>
                Go Back To Cart
              </Button>
              <Button color="primary" size="lg" block className="mx-0" style={{ fontSize: '1rem' }} onClick={handleOrderNow}>
                Order Now
              </Button>
            </div>
          </Col>




        </Row>

      </div >
    </>
  );
}