import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import LoginContent from "../Login Page/LoginContent";
import Accounts from "../Data For App/UserAccounts";
import ModalSignIn from "../Login Page/Modal signin";
const Topline = () => {
  const [modal, setModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const toggleModal = () => {
    setModal(!modal);
    setIsLoggedIn(true)
  }





  useEffect(() => {
    const accountJson = JSON.stringify(Accounts);
    localStorage.setItem("userAccount", accountJson);

  }, [])




  return (
    <div className="bg-dark">
      <Row className=" d-flex justify-content-between text-white mx-auto p-3">
        <Col xxl={4}></Col>

        <Col xs={7} sm={6} xxl={2} className="d-flex">
          <span>+977-9816312937</span>
          <span className="ml-2">info@gmail.com</span>
        </Col>

        {/* <Col xs={0} sm={0}></Col> */}

        <Col xs={4} sm={4} xxl={2} className="text-right">
          <span onClick={toggleModal} style={{ cursor: 'pointer' }}>
            Login
          </span>
          {/* {isLoggedIn ?
            <span>Profile</span>
            :
          } */}
          | WishList
        </Col>

        <Col xxl={4}></Col>
      </Row>

{/* <ModalSignIn state={modal}/> */}
      {/* <Modal isOpen={modal} toggle={toggleModal} centered>
        <ModalBody>
          <LoginContent />
        </ModalBody>

      </Modal> */}
    </div>
  );
};

export default Topline;
