// Cart.js
import React, { useState } from "react";
import ModalUI from "../UI/ModalUI";
import CartItems from "./CartItems";
import { Button, Container, Row, Table } from "react-bootstrap";

const dummyArray = [
  {
    id: "1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "blue",
    price: 150,
  },
];

const Cart = (props) => {
  return (
    <div>
      {dummyArray.map((item) => (
        <ModalUI show={props.show} OnHide={props.OnHide}>
          {dummyArray.map((item) => (
            <CartItems title={item.title} price={item.price} />
          ))}
          <Container>
            <Row>
              <Button>Purchase</Button>
            </Row>
          </Container>
        </ModalUI>
      ))}
    </div>
  );
};

export default Cart;
