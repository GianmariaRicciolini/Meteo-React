import React from "react";
import { Row, Col } from "react-bootstrap";
import { ThermometerHalf, Wind, Moisture } from "react-bootstrap-icons";
import { getWeatherIconUrl } from "../helpers";

const DataPerHour = ({ day }) => {
  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(0);
  };
  return (
    <Row className="d-flex align-items-center bg-primary-subtle bg-opacity-10 border border-primary-subtle border-start-0 rounded">
      <Col xs={1} className="text-end">
        <h6 className="fw-bold pt-2">{day.dt_txt.split(" ")[1].slice(0, -3)}</h6>
      </Col>

      <Col xs={2} className="text-end">
        <img src={getWeatherIconUrl(day.weather[0].icon)} alt="Weather Icon" />
      </Col>
      <Col>
        <p className="pt-3 fw-bold">{day.weather[0].main}</p>
      </Col>

      <Col xs={3}>
        <p className="pt-3">
          Temp. <ThermometerHalf /> : <span className="fw-bold">{kelvinToCelsius(day.main.temp)}°C</span>
        </p>

        <p>
          Perceived <ThermometerHalf /> : <span className="fw-bold">{kelvinToCelsius(day.main.feels_like)}°C</span>
        </p>
      </Col>

      <Col xs={3}>
        <p className="pt-3">
          Wind <Wind /> : <span className="fw-bold">{day.wind.speed} m/s</span>
        </p>

        <p>
          Humidity <Moisture /> : <span className="fw-bold">{day.main.humidity}%</span>
        </p>
      </Col>
    </Row>
  );
};

export default DataPerHour;
