// Cart.js
import React, { useContext, useState } from "react";
import ModalUI from "../UI/ModalUI";
import CartItems from "./CartItems";
import { Button, Container, Row, Table } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const purchaseHandler = () => {
    if (cartCtx.items.length == 0) {
      window.alert("Add items ");
    } else {
      window.alert("Success");
    }
  };

  return (
    <div>
      <ModalUI show={props.show} OnHide={props.OnHide}>
        {cartCtx.items.map((item) => (
          <CartItems
            OnRemove={removeHandler.bind(null, item.id)}
            title={item.title}
            price={item.price}
          />
        ))}
        <Container>
          <Row>
            <Button onClick={purchaseHandler}>Purchase</Button>{" "}
          </Row>
        </Container>
      </ModalUI>
    </div>
  );
};

export default Cart;
