import { Container, Row, Col } from "react-bootstrap";

function HeroSection() {
  return (
    <Container fluid className="hero m-0 p-0">
      {/* <div className=""></div> */}
      <Row className="m-0 p-0">
        <Col>
          <h1 className="fs-giant fw-bold">Welcome</h1>
          <p className="fs-1 my-2">prova di nuovo</p>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
