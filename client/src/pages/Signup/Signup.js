import "./index.css";
import React, { useState } from "react";

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

import { Link } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'

export default function Signup(props) {
  const [valid, setValid] = useState(false);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      
      try {
        console.log(formState);
        const { data } = await addUser({
          variables: { ...formState },
        });
        
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    }
    setValid(true);
  };

  return (
     <Col lg={4} md={6} sm={9}>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
        <Form noValidate validated={valid} onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label hidden={true}>First Name</Form.Label>
              <Form.Control 
                className=""
                placeholder="First Name"
                required
                type="text"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                />
              <Form.Control.Feedback type="invalid">Please enter a first name.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label hidden={true}>Last Name</Form.Label>
              <Form.Control 
                className=""
                placeholder="Last Name"
                required
                type="text"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                />
              <Form.Control.Feedback type="invalid">Please enter a last name.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label hidden={true}>Email Address</Form.Label>
              <Form.Control 
                className=""
                placeholder="Email Address"
                required
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                />
              <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label hidden={true}>Password</Form.Label>
              <Form.Control 
                className=""
                placeholder="Password"
                required
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                />
              <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
        </Form>
        )}
    </Col>
  );
}
