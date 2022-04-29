import "./index.css";
import React from "react";
import { Header, Footer } from "../../components";
import { Outlet } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container id="page">
      <Row className="row-content justify-content-center">
        
        <div id="content-top" className="col align-self-start">
          <div className="row">
            <Header />
            <Outlet />
          </div>
        </div>

        <Footer />
      </Row>
    </Container>
  );
}
