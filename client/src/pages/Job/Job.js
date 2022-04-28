import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import audioWave from "../../assets/audioWave.jpeg";
import "./index.css";
import { QUERY_SINGLE_JOB } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
export default function Job() {
    const { jobId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_JOB, {
        variables: {
            jobId}
    });
    const job = data?.job || [];
    console.log(job);
    return (
        <Container id="job">
            <Row className=" justify-content-center">
                <Card className="col">
                    <Card.Img variant="top" src={audioWave} />
                    <Card.Body>
                        <Card.Title>{job.name}</Card.Title>
                        <Card.Text>
                           {job.description}
                        </Card.Text>
                        <Card.Text>
                            <div className="row justify-content-center">
                           ${job.price}
                           </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <div className="row justify-content-center">
                            <Button
                                className="col-4 bg-success"
                                as="input"
                                type="button"
                                value="Hire Me"
                                id="hireButton"
                            />{" "}
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}
