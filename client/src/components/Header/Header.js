import "./index.css";
import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  const logout = () => {
    Auth.logout();
  };

  const isLoggedIn = Auth.getToken();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" id="main-nav" className="col">
      <Container className=" justify-content-between">
        <Navbar.Brand as={Link} to="/" className="col">
          Freelancer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="col" id="responsive-navbar-nav">
          {!isLoggedIn ? (
            <Nav className="header-nav">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          ) : (
            <Nav className="header-nav">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
              <Nav.Link onClick={logout}>Logout</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
