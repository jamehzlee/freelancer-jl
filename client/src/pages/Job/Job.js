import React from "react";
import "./index.css";
import { Container, Row, Card, Button } from "react-bootstrap";
import { audioWave, art, cooking, socialMedia, tech } from "../../assets";

import { QUERY_SINGLE_JOB } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

export default function Job() {
    const { jobId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_JOB, {
        variables: {
            jobId,
        },
    });
    const job = data?.job || [];

    let selectedImg = "";

    if (!loading) {
        selectedImg = job.category.name;
        switch (selectedImg) {
            case "Tech":
                selectedImg = tech;
                break;
            case "Audio":
                selectedImg = audioWave;
                break;
            case "Art":
                selectedImg = art;
                break;
            case "Cooking":
                selectedImg = cooking;
                break;
            case "Social Media":
                selectedImg = socialMedia;
                break;
            default:
                console.log("no category!");
        }
    };

    return (
        <div id="job-content">
            {loading ? (
                ""
            ) : (
                <Container id="job">
                    <Row className=" justify-content-center">
                        <Card className="col">
                            <Card.Img variant="top" src={selectedImg} />
                            <Card.Body>
                                <Card.Title>{job.name}</Card.Title>
                                <Card.Text>{job.description}</Card.Text>
                                <Card.Text className="row justify-content-center">
                                    ${job.price}
                                </Card.Text>
                                <Card.Text className="row justify-content-center">
                                    {job.user.firstName} {job.user.lastName}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <div className="row justify-content-center text-center">
                                    <Button href={`mailto:${job.user.email}`} className="col-4 bg-success">Hire Me</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            )}
        </div>
    );
}
