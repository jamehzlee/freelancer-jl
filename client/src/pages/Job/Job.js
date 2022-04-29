import React, {useState, useEffect} from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import audioWave from "../../assets/audioWave.jpeg";
import art from "../../assets/art.jpeg";
import cooking from "../../assets/cooking.jpeg";
import socialMedia from "../../assets/socialMedia.jpeg";
import tech from "../../assets/tech.jpeg";

import "./index.css";
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
    console.log(job);
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
        }};

    return (
        <div>
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
            )}
        </div>
    );
}
