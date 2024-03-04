import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../components/assets/images/logo/logo.svg";
import "../assets/css/navbar.css";
import Button from "../comman/Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
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
            <Nav.Link as={NavLink} to="/" className="me-4 font-bold text-lg">
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/spares"
              className="me-4 font-bold text-lg"
            >
              Spares
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/blog"
              className="me-4 font-bold text-lg"
            >
              Blog
            </Nav.Link>
            <NavDropdown
              title="More"
              id="basic-nav-dropdown"
              className="me-4 font-bold text-lg"
            >
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
