import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Button variant="primary" onClick={props.OnShow}>
      <Container>
        <Row>
          <Col style={{ paddingTop: "0.3rem" }}>CART</Col>
          <Col>
            <div
              style={{
                backgroundColor: "black",
                borderRadius: "25px",
                padding: "0.25rem 1rem",
                marginLeft: "1rem",
                fontWeight: "bold",
              }}
            >
              {cartCtx.items.length}
            </div>
          </Col>
        </Row>
      </Container>
    </Button>
  );
};
export default HeaderCartButton;
