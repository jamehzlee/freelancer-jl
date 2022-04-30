import "./index.css";
import { React, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import audioWave from "../../assets/audioWave.jpeg";
import { QUERY_USER, QUERY_JOBS_BY_USER } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";

export default function Profile() {
    const { userId } = useQuery(QUERY_USER, {
      variables: {
        
      }
    }
    const { loading, data } = useQuery(QUERY_JOBS_BY_USER, {
        variables: {
            userId,
        },
    });

    const jobInfo = data?.jobsByUser;
    console.log(jobInfo)
    console.log(userId)

    return (
        <div>
            {loading ? (
                ""
            ) : (
                <Row className=" justify-content-center" id="profile">
                    {/* {jobInfo.map(job=>{return <div>{job.name}</div>})} */}
                    <Card className="col">
                        <Card.Img variant="top" src={audioWave} />
                        <Card.Body>
                            <Card.Title>{jobInfo.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title and make up the bulk of the card's
                                content.
                            </Card.Text>
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
            )}
        </div>
    );
}
