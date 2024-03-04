import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/logo.svg";
import "../../assets/css/navbar.css";
import Button from "../comman/Button";

function Header() {
  const handleLogin = () => {
    // Add login logic here
    console.log("Login button clicked");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            alt="brand logo"
            src={logo}
            width="280"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/spares">
              Spares
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Terms</NavDropdown.Item>
              <NavDropdown.Item href="#">Privacy</NavDropdown.Item>
              <NavDropdown.Item href="#">Offers</NavDropdown.Item>
              <NavDropdown.Item href="#">Reviews</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button onClick={handleLogin} label="Login" />
      </Container>
    </Navbar>
  );
}

export default Header;
