import './index.css'
import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };

  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" className='align-self-start main-nav'>
      <Container className=' justify-content-between'>
      <Navbar.Brand as={Link} to="/" className='col' >Freelancer</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className='col' id="responsive-navbar-nav">
        <Nav className="header-nav">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
