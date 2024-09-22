import React from "react";
import { Row, Col } from "react-bootstrap";

function MeteoCityCard({ cityMeteo }) {
  const { name, country, temp, weather, icon } = cityMeteo;

  return (
    <Row className="bg-info-subtle border rounded">
      <Col xs={12} className="d-flex">
        <h5 className="card-title fs-2 fw-bold my-3">
          {name}, {country}{" "}
        </h5>
        <img src={icon} alt={icon} style={{ width: "60px", height: "60px" }} />
      </Col>
      <div className="mt-auto d-flex flex-column text-start">
        <Col xs={12}>
          <p className="fs-5">
            <strong>Weather:</strong> {weather}
          </p>
          <p className="fs-5">
            <strong>Temperature:</strong> {temp}°C
          </p>
        </Col>
      </div>
    </Row>
  );
}

export default MeteoCityCard;
