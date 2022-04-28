import { React } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import audioWave from "../../assets/audioWave.jpeg";
import "./index.css";

export default function Job() {
  return (
    <Container id="job">
      <Row className=' justify-content-center'>
        <Card className="col" >
          <Card.Img variant="top" src={audioWave} />
          <Card.Body>
            <Card.Title>Service Name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <div className="row justify-content-center">
            <Button className="col-4 bg-success" as="input" type="button" value="Hire Me" id="hireButton"/>{' '}
            </div>
          </Card.Body>
          
        </Card>
      </Row>
    </Container>
  );
}
