import "./login.css";
import React, { useState } from "react";
import { QUERY_USER } from '../../utils/queries'
import { useQuery } from "@apollo/client";
import { Form, Row, Col } from 'react-bootstrap'

export default function Login() {
  const [valid, setValid] = useState(false);
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
          <Row>
            <Form.Group as={Col}>
              <Form.Label hidden='true'>Email Address</Form.Label>
              <Form.Control 
                required
                type="email"
                placeholder="Email Address"
                className=""/>
              <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label hidden='true'>Password</Form.Label>
              <Form.Control 
                required
                type="password"
                placeholder="Password"
                className=""/>
              <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
    </Col>
  );
}
