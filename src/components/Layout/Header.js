import { Container, Nav, Navbar } from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <Navbar variant="tabs" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <h3>The Generics</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="link">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Store</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled">About</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <HeaderCartButton />
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
