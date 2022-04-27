import "./index.css";
import React from "react";
import { Header, Footer } from "../../components";
import { Outlet } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container className="page">
      <Row className="row-content justify-content-center">
        <Header />

        <Outlet />

        <Footer />
      </Row>
    </Container>
  );
}
