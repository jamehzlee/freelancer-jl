import { React, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./profile.css";
export default function Profile() {
    // still needs query using apollo client to get user data
    const [userInfo, setUserInfo] = useState({
        firstName: "Sami",
        lastName: "Fares",
        email: "test@email.com",
    });
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <h1>Profile Page</h1>
                    <p>{userInfo.firstName + " " + userInfo.lastName}</p>
                    <p>{userInfo.email}</p>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Job Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Job Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Job Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}
