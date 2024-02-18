import { Button, Col, Container, ListGroup, Row, Table } from "react-bootstrap";

const CartItems = (props) => {
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <Container>
              <Row>
                <Col>
                  <td>{props.title}</td>
                </Col>
                <Col>
                  <td>{props.price}</td>
                </Col>
                <Col>
                  {" "}
                  <td>
                    <input style={{ width: "3rem" }} type="number" />
                  </td>
                </Col>
                <Col>
                  <td>
                    <Button onClick={props.OnRemove}>REMOVE</Button>
                  </td>
                </Col>
              </Row>
            </Container>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default CartItems;
