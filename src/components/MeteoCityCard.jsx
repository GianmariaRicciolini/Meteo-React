import React from "react";
import { Row, Col } from "react-bootstrap";

function MeteoCityCard({ cityMeteo }) {
  const { name, country, temp, weather, icon } = cityMeteo;

  return (
    <Row className="bg-danger" style={{ maxWidth: "300px" }}>
      <Col xs={12} className="d-flex justify-content-start align-items-center">
        <p className="fw-bold m-0">
          {" "}
          {name}, {country}
        </p>
        <img src={icon} alt={weather} />
      </Col>
      <Col xs={12}>
        <p>Temperatura: {temp}°C</p>
        <p>Condizioni: {weather}</p>
      </Col>
    </Row>
  );
}

export default MeteoCityCard;
