import React, { useEffect, useState } from "react";
import AlertHelp from "./AlertHelp";
import { Col, Container, Row } from "react-bootstrap";
import RandomCity from "./RandomCity";
import HeroSection from "./HeroSection";

function HomePage() {
  return (
    <Container fluid className="bg-light">
      <Row>
        <Col className="p-0 m-0">
          <HeroSection />
        </Col>
      </Row>
      <Row>
        <Col className="d-none d-lg-block">
          <p className="card-title fs-big fw-bold my-3">
            Curious about the weather around the world? Here's a snapshot!
          </p>
        </Col>
        <Col className="d-lg-none">
          <p className="card-title fs-1 fw-bold m-0">Curious about the weather around the world? Here's a snapshot!</p>
        </Col>
      </Row>
      <RandomCity />
    </Container>
  );
}

export default HomePage;
