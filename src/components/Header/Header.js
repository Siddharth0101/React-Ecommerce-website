import {
  Container,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand style={{ color: "white" }}>
            <h1>The Generics</h1>
          </NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav fill variant="tabs">
              <Nav.Item>
                <NavLink to="/home" className="nav-link">
                  <h5> Home</h5>
                </NavLink>
              </Nav.Item>
              <NavItem>
                <NavLink to="/store" className="nav-link">
                  <h5> Store</h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  <h5> About</h5>
                </NavLink>
              </NavItem>
            </Nav>
          </NavbarCollapse>
          <HeaderCartButton onShow={props.onShow} />
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};
export default Header;
