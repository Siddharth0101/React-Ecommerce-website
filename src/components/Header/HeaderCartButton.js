import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Button onClick={props.onShow}>
      <Container>
        <Row>
          <Col style={{ paddingTop: "0.25rem" }}>
            <h5>CART</h5>
          </Col>
          <Col>
            <div
              style={{
                backgroundColor: "black",
                borderRadius: "18px",
                padding: "0.2rem 0.8rem",
                marginLeft: "0.8rem",
                fontWeight: "bold",
              }}
            >
              <h5>{cartCtx.items.length}</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </Button>
  );
};
export default HeaderCartButton;
