import { React } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import audioWave from "../../assets/audioWave.jpeg";
import "./index.css";
// import { JobCard } from "../../components";

export default function Job() {
  // return <JobCard />;
  return (
    <Container>
      <Row>
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src={audioWave} />
          <Card.Body>
            <Card.Title>Service Name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            {/* <div>
            <Button as="input" type="button" value="Edit" />{' '}
            <Button as="input" type="button" value="Delete" id='redButton' />{' '}
            </div> */}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
