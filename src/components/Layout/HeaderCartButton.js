import { Button, Col, Container, Row } from "react-bootstrap";

const HeaderCartButton = (props) => {
  return (
    <Button variant="primary">
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
              3
            </div>
          </Col>
        </Row>
      </Container>
    </Button>
  );
};
export default HeaderCartButton;
