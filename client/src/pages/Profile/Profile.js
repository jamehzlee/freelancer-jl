import "./index.css";
import { React, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import audioWave from "../../assets/audioWave.jpeg"
import { QUERY_USER , QUERY_JOBS_BY_USER} from "../../utils/queries";
import {useQuery , useMutation} from "@apollo/client";

export default function Profile() {
//  const {loadiing,data}=useQuery(QUERY_USER)
 const {loading,data}=useQuery(QUERY_JOBS_BY_USER)
  // const [userInfo, setUserInfo] = useState({
  //     firstName: "Sami",
  //     lastName: "Fares",
  //     email: "test@email.com",
  // });
  // console.log(data);
  // setUserInfo(data.user)
  // console.log(userInfo);
  // const userInfo=data?.user;
  const jobInfo=data?.jobsByUser;
  function testing() {
    // console.log(userInfo);
    console.log(jobInfo);
  }
  if(loading){return <h2>"loading"</h2> }
  return (
      <Row onClick={(e)=> {e.preventDefault();testing()}}className=" justify-content-center" id="profile">    
      {jobInfo.map(job=>{return <div>{job.name}</div>})}
        <Card className="col">
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
        <Card className="col">
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
        <Card className="col">
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
        <Card className="col">
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
  );
    
}
