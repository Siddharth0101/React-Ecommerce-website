import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalUI(props) {
  return (
    <div>
      <Offcanvas show={props.show} onHide={props.OnHide} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.children}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ModalUI;
