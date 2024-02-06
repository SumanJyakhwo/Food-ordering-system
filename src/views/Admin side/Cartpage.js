import React, { useState } from "react";
import { Button, Row, Col, Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardHeader, Table } from 'reactstrap';
import Headerwithoutstats from "components/Headers/Headerwithoutstats";
import nepaliFoodData from "./Data for Admin/Fooddata";
import { useNavigate } from "react-router-dom";
export default function CartPage() {

    const navigate = useNavigate();
    const renderStatus = (product) => (
        <div className={`text-${(product.status === 'sale' && 'danger') || 'info'}`}>
            {product.status}
        </div>
    );

    const renderImg = (product) => (
        <CardImg
            top
            width="100%"
            style={{ objectFit: 'cover', height: '200px' }}
            src={product.imgLink}
            alt={product.name}
        />
    );

    const renderPrice = (product, quantity) => (
        <div>
            {product.priceSale && (
                <span className="text-muted">{product.price * quantity}</span>
            )}
            <span>Rs. {product.price * quantity}</span>
        </div>
    );

    const [cart, setCart] = useState([]);

    const addToCart = (food) => {
        const existingIndex = cart.findIndex((item) => item.id === food.id);

        if (existingIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...food, quantity: 1 }]);
        }
    };

    const increaseQuantity = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        setCart(updatedCart);
    };

    const decreaseQuantity = (index) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
        }
        setCart(updatedCart);
    };

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
    };
    const handleorder =()=>{
        navigate('/admin/checkout')
    }

    return (
        <>
            <Headerwithoutstats />
            <Container className="pb-8 pt-4 pt-md-4" fluid>
                <Row>
                    {/* Products List */}
                    <Col xs='10' md='7' lg='6' xl='6' sm='6' className="mx-auto">
                        <Row>
                            {nepaliFoodData.map((product) => (
                                <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3">
                                    <Card>
                                        {product.status && renderStatus(product)}
                                        {renderImg(product)}
                                        <CardBody>
                                            <CardTitle tag="h3" className="text-black mb-3 d-flex justify-content-between align-items-center">
                                                <a href="#" className="text-dark">{product.name}</a>
                                                <span>
                                                    <button style={{ backgroundColor: 'black', borderRadius: '6px' }} className=" text-white" onClick={() => addToCart(product)}>
                                                        <i className="fas fa-plus" />
                                                    </button>
                                                </span>
                                            </CardTitle>
                                            <CardSubtitle tag="h5" className=" mb-2 text-muted">
                                                {renderPrice(product, 1)}
                                            </CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </Row>
                    </Col>

                    {/* Cart */}
                    <Col xs='10' sm='6' md='5' lg='6' xl='6' className="mx-auto">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Cart Items</h3>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => (
                                        <tr key={index}>
                                            <td><strong>{item.name}</strong></td>
                                            <td>
                                                <Button
                                                    size="sm"
                                                    color="warning"
                                                    onClick={() => decreaseQuantity(index)}
                                                >
                                                    -
                                                </Button>
                                                {item.quantity}
                                                <Button
                                                    size="sm"
                                                    color="success"
                                                    onClick={() => increaseQuantity(index)}
                                                >
                                                    +
                                                </Button>
                                            </td>
                                            <td>{renderPrice(item, item.quantity)}</td>
                                            <td>
                                                <Button
                                                    size="sm"
                                                    color="danger"
                                                    onClick={() => removeFromCart(index)}
                                                >
                                                    Remove
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card>
                        <div className="mt-4 mx-auto d-flex justify-content-center">
                            <Button
                                color="info"
                                href="#pablo"
                                onClick={()=>handleorder()}
                            >
                                Order Now
                            </Button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    );
}
