import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-black text-light mt-5 pt-5">
      <Container>
        <Row>
          <Col md={10}>
            <h5 className="pb-4">Informazioni di contatto</h5>
            <p>Indirizzo: Via Lorem, 123 - 00123, Ipsum</p>
            <p>Email: lorem@mymeteo.ipsum</p>
            <p>Telefono: 0123456789</p>
          </Col>
          <Col md={2}>
            <h5 className="pb-4">Link utili</h5>
            <ul className="list-unstyled">
              <li>
                <p className="text-light">Lorem</p>
              </li>
              <li>
                <p className="text-light">Ipsum</p>
              </li>
              <li>
                <p className="text-light">Hello</p>
              </li>
              <li>
                <p className="text-light">World</p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 MyMeteo. Tutti i diritti riservati.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
