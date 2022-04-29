import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import Auth from "../../utils/auth";

export default function PostJob() {
  return (
    <Col xxl={4} xl={5} lg={6} md={7} sm={9} xs={10}>
      <Form
        noValidate
        //   validated={valid} onSubmit={handleSubmit}
      >
        <Form.Group className="mb-4">
          <Form.Label hidden={true}>Title</Form.Label>
          <Form.Control
            className=""
            placeholder="Title"
            required
            type="text"
            name="title"
            // value={formState.title}
            // onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a title.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label hidden={true}>Price</Form.Label>
          <Form.Control
            className=""
            placeholder="$$$"
            required
            type="text"
            name="price"
            // value={formState.price}
            // onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a price.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label hidden={true}>Description</Form.Label>
          <Form.Control
            className=""
            placeholder="Description"
            required
            type="text"
            name="text"
            // value={formState.description}
            // onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid description.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          POST
        </Button>
      </Form>
    </Col>
  );
}
