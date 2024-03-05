import React, { useContext, useState } from "react";

import CartItems from "./CartItems";
import { Button, Container, Row, Table } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import OffCanvasUI from "../UI/OffCanvasUI";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const removeHandler = (id) => {
    cartCtx.removeItem(id);
  };
  return (
    <div>
      <OffCanvasUI show={props.show} OnHide={props.OnHide}>
        {cartCtx.items.map((item) => (
          <CartItems
            title={item.title}
            price={item.price}
            OnRemove={removeHandler.bind(null, item.id)}
          />
        ))}
        <Container>
          <Row>
            <Button>Purchase</Button>
          </Row>
        </Container>
      </OffCanvasUI>
    </div>
  );
};

export default Cart;
