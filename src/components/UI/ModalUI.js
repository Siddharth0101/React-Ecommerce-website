import React, { useState } from "react";
import { Col, Container, Offcanvas, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalUI(props) {
  return (
    <div>
      <Offcanvas show={props.show} onHide={props.OnHide} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Container>
              <Row>
                <Col>Name</Col>
                <Col>Price</Col>
                <Col>Amount</Col>
                <Col>Action</Col>
              </Row>
            </Container>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.children}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ModalUI;
