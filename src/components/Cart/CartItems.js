import { Button, Col, Container, Row, Table } from "react-bootstrap";

const CartItems = (props) => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <Container>
              <Row>
                <Col>
                  <td>
                    <h4>{props.title}</h4>
                  </td>
                </Col>
                <Col>
                  <td>
                    <h4>${props.price}</h4>
                  </td>
                </Col>
                <Col>
                  <td>
                    <input
                      defaultValue={1}
                      style={{ width: "3rem" }}
                      type="number"
                    />
                  </td>
                </Col>
                <Col>
                  <td>
                    <Button variant="danger" onClick={props.OnRemove}>
                      REMOVE
                    </Button>
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
