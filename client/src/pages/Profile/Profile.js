import "./index.css";
import { React, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import audioWave from "../../assets/audioWave.jpeg"

export default function Profile() {
  // still needs query using apollo client to get user data
  const [userInfo, setUserInfo] = useState({
      firstName: "Sami",
      lastName: "Fares",
      email: "test@email.com",
  });

  return (
    <Container id="profile">
      <Row className=" justify-content-center">    
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={audioWave} />
          <Card.Body>
            <Card.Title>Service Name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
          <div className="row justify-content-between">
          <Button className="col-4" as="input" type="button" value="Edit" />{' '}
          <Button className="col-4 bg-danger" as="input" type="button" value="Delete"/>{' '}
          </div>
          </Card.Body>
        </Card>
      </Row>
  </Container>
  );
    
}
