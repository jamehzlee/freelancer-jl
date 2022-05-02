import "./index.css";
import { useMutation } from "@apollo/client";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DELETE_JOB } from "../../utils/mutations";

export default function ProfileItem({ job, selectedImg }) {
  const [deleteJob, {error, data}] = useMutation(DELETE_JOB)
  
  const handleDelete = async (id) => {
    console.log(id);
    try {
      const data = await deleteJob({
          variables: {
              jobDeleteId: id
          }
      });
      window.location.reload();
    } catch (error) {
        
    }
  };

  return (
    <Card className="col" id="profile-card">
      <Card.Img src={selectedImg} />
      <Card.Body>
        <Card.Title>{job.name}</Card.Title>
        <Card.Text>${job.price}</Card.Text>
        <Card.Text>{job.description}</Card.Text>
      </Card.Body>
      <Card.Body id="buttons">
        <div className="row justify-content-between">
          <Button
            className="col-4"
            type="button"
            as={Link}
            to={`edit/${job._id}`}
          >
            Edit
          </Button>
          <Button
            className="col-4 bg-danger"
            type="button"
            data-category={job._id}
            onClick={() => handleDelete(job._id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
