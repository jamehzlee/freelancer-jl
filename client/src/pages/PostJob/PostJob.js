import "./index.css"
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { ADD_JOB } from "../../utils/mutations";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function PostJob() {
  const [valid, setValid] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });
  const [addJob, { error }] = useMutation(ADD_JOB);
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  const categories = categoryData?.categories || [];

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
          category: formState.category,
        };
        console.log(job);
        const { data } = addJob({
          variables: {
            ...job,
          },
        });
        window.location.assign('/');
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
        <Form noValidate validated={valid} onSubmit={handleSubmit} id='postjob-form'>
          <Form.Group className="mb-4">
            <Form.Label hidden={true}>Title</Form.Label>
            <Form.Control
              className=""
              placeholder="Title"
              required
              type="text"
              name="name"
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

          <Form.Group className="mb-4">
            <Form.Select
              onChange={handleChange}
              required
              aria-label="Default select example"
              name="category"
            >
              <option selected disabled value={''}>Please select a Category</option>
              {!loading ? (
                categories.map((category) => {
                  return (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  );
                })
              ) : (
                <option></option>
              )}
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please select a catgeory.
            </Form.Control.Feedback>
          </Form.Group>
          
          <Row className="justify-content-center">
            <Button className="col" variant="primary" type="submit">
              Post Job
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}
