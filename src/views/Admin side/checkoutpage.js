import React, { useState } from "react";
import { Button, Container, Row, Col, Card, CardHeader, CardBody, Table } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import cartItems from "./Data for Admin/cartitems";
import Headerwithoutstats from "components/Headers/Headerwithoutstats";
const CheckoutPage = ({ cart }) => {

  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePayment = (item) => {
    // Display cart items and payment method in console
   
    console.log("Cart Items:");
    item.forEach((item, index) => {
      console.log(`${index + 1}. Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price * item.quantity}`);
    });
    console.log("Selected Payment Method:", selectedPayment);

    // Additional logic for handling the payment can be implemented here

    // For demonstration purposes, you can navigate to another page after placing the order
    // navigate('/path-to-success-page');
  };
  return (
    <>
    <Headerwithoutstats/>
    <Container className="py-4" fluid>
      <Row>
        <Col xs='10' sm='6' md='6' lg='6' xl='6' className="mx-auto">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h1 className="mb-0">Your Orders</h1>
                </div>
              </Row>
            </CardHeader>
            <CardBody>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td><strong>{item.name}</strong></td>
                      <td>{item.quantity}</td>
                      <td>{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="mt-4 ">
                <h3>Select Payment Method</h3>
                
                <div>
                  <label>
                    <input
                      type="radio"
                      value="cashOnDelivery"
                      checked={selectedPayment === "cashOnDelivery"}
                      onChange={() => setSelectedPayment("cashOnDelivery")}
                    />
                   <span className="ml-4 text-muted">Cash On Delivery</span>
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="esewa"
                      checked={selectedPayment === "esewa"}
                      onChange={() => setSelectedPayment("esewa")}
                    />
                      <span className="ml-4 text-muted">eSewa</span>
                    
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="khalti"
                      checked={selectedPayment === "khalti"}
                      onChange={() => setSelectedPayment("khalti")}
                    />
                      <span className="ml-4 text-muted">Khalti</span>
                    
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="fonepay"
                      checked={selectedPayment === "fonepay"}
                      onChange={() => setSelectedPayment("fonepay")}
                    />
                      <span className="ml-4 text-muted">Fonepay</span>
                    
                  </label>
                </div>
              </div>
              <div className="mt-4 mx-auto d-flex justify-content-center">
                <Button color="success" onClick={()=>handlePayment(cartItems)}>
                  Place Order
                </Button>
                <Button className="ml-2" color="danger" onClick={()=>navigate('/admin/product')}>
                  Go Back to Cart
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default CheckoutPage;
