import "./index.css";
import React, { useState } from "react";
import { QUERY_USER } from '../../utils/queries'
import { useQuery } from "@apollo/client";
import { Form, Button, Col } from 'react-bootstrap'

export default function Login() {
  const [valid, setValid] = useState(false);
  const [email, setEmail] = useState('')
  const {user, data } = useQuery(QUERY_USER);
  
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
