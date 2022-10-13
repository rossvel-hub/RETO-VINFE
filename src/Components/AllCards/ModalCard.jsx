import React from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';

const ModalCard = ({show, handleClose}) => {
  

  return (
    <div className="container">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor:"#000000"}}>
          <Modal.Title className="title-modal">Un poco de su historia...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Lorem50</Modal.Body>
        <Modal.Footer style={{backgroundColor:"#000000"}}>
          <Button onClick={handleClose} style={{ backgroundColor: "#34E807" }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalCard;