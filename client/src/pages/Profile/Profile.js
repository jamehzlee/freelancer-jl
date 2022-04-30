import "./index.css";
import { React, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import audioWave from "../../assets/audioWave.jpeg";
import { QUERY_ALL_JOBS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from '../../utils/auth';

export default function Profile() {
    const auth = Auth.getProfile();

    const { loading, data } = useQuery(QUERY_ALL_JOBS);

    const jobs = data?.allJobs
    console.log(jobs);

    return (
        <div>
            {loading
                ? 
                ''
                : 
                jobs.map((job) => {
                    if (job.user._id === auth.data._id) {
                        return (
                            <Row className=" justify-content-center" id="profile" key={job._id}>
                                <Card className="col">
                                    <Card.Img variant="top" src={audioWave} />
                                    <Card.Body>
                                        <Card.Title>{job.name}</Card.Title>
                                        <Card.Text>{job.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Body>
                                        <div className="row justify-content-between">
                                            <Button
                                                className="col-4"
                                                as="input"
                                                type="button"
                                                value="Edit"
                                            />{" "}
                                            <Button
                                                className="col-4 bg-danger"
                                                as="input"
                                                type="button"
                                                value="Delete"
                                            />{" "}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Row>
                        );
                    }
                })
            }
        </div>
    );
}
