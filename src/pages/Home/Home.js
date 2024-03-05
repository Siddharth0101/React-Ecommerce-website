import { Button, Col, Container, Row, Table } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <h1
              style={{
                backgroundColor: "black",
                fontSize: "10rem",
                textAlign: "center",
                color: "whitesmoke",
              }}
            >
              The Generics
              <div className="text-center">
                <Button style={{ width: "900px" }}>
                  <h1>Get Our Latest Album</h1>
                </Button>
              </div>
            </h1>
          </Col>
        </Row>
      </Container>
      <div style={{ width: "103rem", margin: "2rem", textAlign: "center" }}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>
                <h3>Date</h3>
              </th>
              <th>
                <h3>Country</h3>
              </th>
              <th>
                <h3>Place</h3>
              </th>
              <th>
                <h3>Purchase</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h5>JUL 16</h5>
              </td>
              <td>
                <h5>DETROIT, MI</h5>
              </td>
              <td>
                <h5>DTE ENERGY MUSIC THEATRE</h5>
              </td>
              <td>
                <Button>
                  <h4>Buy Tickets</h4>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <h5>JUL 19</h5>
              </td>
              <td>
                <h5>TORONTO,ON</h5>
              </td>
              <td>
                <h5>BUDWEISER STAGE</h5>
              </td>
              <td>
                <Button>
                  <h4>Buy Tickets</h4>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <h5>JUL 22</h5>
              </td>
              <td>
                <h5>BRISTOW, VA</h5>
              </td>
              <td>
                <h5>JIGGY LUBE LIVE</h5>
              </td>
              <td>
                <Button>
                  <h4>Buy Tickets</h4>
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <h5>JUL 29</h5>
              </td>
              <td>
                <h5>PHOENIX, AZ</h5>
              </td>
              <td>
                <h5>AK-CHIN PAVILION</h5>
              </td>
              <td>
                <Button>
                  <h4>Buy Tickets</h4>
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Home;
