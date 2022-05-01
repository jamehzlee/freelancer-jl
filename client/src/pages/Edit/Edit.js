import "./index.css";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Form, Button, Row, Col } from "react-bootstrap";
import { UPDATE_JOB } from "../../utils/mutations";
import { useParams } from "react-router-dom";

export default function Edit() {
  const { jobId } = useParams();
  const [valid, setValid] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    price: "",
    description: "",
  });
  const [addJob, { error }] = useMutation(UPDATE_JOB);


  const handleChange = (event) => {
    let { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === true) {
      try {
        let price = parseFloat(formState.price);
        console.log(price);
        const job = {
          name: formState.name,
          description: formState.description,
          price: price,
        };
        console.log(job);
        const { data } = addJob({
          variables: {
            jobUpdateId: jobId,
            ...job,
          },
        });
        window.location.assign("/profile");
        console.log("Success!");
      } catch (e) {
        console.error(e);
        console.log(e);
      }
    }
    setValid(true);
  };
  return (
    <Row className="justify-content-center mt-5">
      <Col xxl={4} xl={5} lg={6} md={7} sm={9} xs={10}>
        <Form noValidate validated={valid} onSubmit={handleSubmit} id='edit-form'>
          <Form.Group className="mb-4">
            <Form.Label hidden={true}>Title</Form.Label>
            <Form.Control
              className=""
              placeholder="Title"
              required
              type="text"
              name="name"
              // value={formState.title}
              onChange={handleChange}
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
              type="number"
              name="price"
              value={formState.price}
              onChange={handleChange}
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
              as="textarea"
              rows={5}
              name="description"
              value={formState.description}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid description.
            </Form.Control.Feedback>
          </Form.Group>

          <Row className="justify-content-center" id="edit-submit">
            <Button className="col" variant="success" type="submit">
              Edit Job
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}
