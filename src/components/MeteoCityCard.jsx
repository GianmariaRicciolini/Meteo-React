import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function MeteoCityCard({ cityMeteo }) {
  const { name, country, temp, weather, icon } = cityMeteo;

  return (
    <Link to={`/weather/${name}`} style={{ textDecoration: "none", color: "inherit" }} className="link-card">
      <Row className="meteoCard glass-effect d-flex justify-content-center bg-primary-subtle border-0 position-relative">
        <Col xs={12} className="position-relative">
          <h5 className="card-title fs-2 fw-bold my-3">
            {name}, {country}
          </h5>
          {/* Posiziona l'icona meteo assolutamente */}
          <img src={icon} alt="Weather Icon" className="weather-icon" />
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
    </Link>
  );
}

export default MeteoCityCard;
