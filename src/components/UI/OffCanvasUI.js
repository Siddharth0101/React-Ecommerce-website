import { Col, Container, Offcanvas, Row, Table } from "react-bootstrap";

const OffCanvasUI = (props) => {
  return (
    <div>
      <Offcanvas
        show={props.show}
        onHide={props.OnHide}
        placement="end"
        style={{ backgroundColor: "lightgray" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>
                    <h4>Color</h4>
                  </th>
                  <th>
                    <h4>Price</h4>
                  </th>
                  <th>
                    <h4>Quantity</h4>
                  </th>
                  <th>
                    <h4>Action</h4>
                  </th>
                </tr>
              </thead>
            </Table>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.children}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};
export default OffCanvasUI;
