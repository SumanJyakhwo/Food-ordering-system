import React, { useEffect, useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import LoginContent from "./LoginContent";

const ModalSignIn = ({ state }) => {
    const [modal, setModal] = useState(!!state);

    return (
        <Modal isOpen={modal} centered>
            <ModalBody>
                <LoginContent />
            </ModalBody>
        </Modal>
    );
};

export default ModalSignIn;
