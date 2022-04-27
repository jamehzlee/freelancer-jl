import "./index.css";
import React, { useState } from "react";
import { Form, Button, Col } from 'react-bootstrap'

export default function Signup() {
  const [valid, setValid] = useState(false);
  
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValid(true);
  };

  return (
     <Col lg={4} md={6} sm={9}>
        <Form noValidate validated={valid} onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label hidden='true'>First Name</Form.Label>
              <Form.Control 
                required
                type="text"
                placeholder="First Name"
                className=""/>
              <Form.Control.Feedback type="invalid">Please enter a first name.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label hidden='true'>Last Name</Form.Label>
              <Form.Control 
                required
                type="text"
                placeholder="Last Name"
                className=""/>
              <Form.Control.Feedback type="invalid">Please enter a last name.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label hidden='true'>Email Address</Form.Label>
              <Form.Control 
                required
                type="email"
                placeholder="Email Address"
                className=""/>
              <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label hidden='true'>Password</Form.Label>
              <Form.Control 
                required
                type="password"
                placeholder="Password"
                className=""/>
              <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Log In
            </Button>
        </Form>
    </Col>
  );
}
