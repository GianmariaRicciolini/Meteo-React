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
      <Col xs={2} md={2} lg={1} xl={1} className="text-center">
        <h6 className="fw-bold pt-2">{day.dt_txt.split(" ")[1].slice(0, -3)}</h6>
      </Col>

      <Col xs={3} md={2} lg={2} xl={2} className="text-center p-0">
        <img src={getWeatherIconUrl(day.weather[0].icon)} alt="Weather Icon" className="img-carousel" />
      </Col>
      <Col lg={2} xl={3} className="d-none d-lg-block text-center">
        <p className="pt-3 fw-bold">{day.weather[0].main}</p>
      </Col>

      <Col xs={2} sm={3} className="pt-3 px-0 px-sm-3 d-block d-md-none text-center">
        <p className="fw-bold fs-5 fs-sm-1">{kelvinToCelsius(day.main.temp)}°C</p>
      </Col>

      <Col md={4} lg={3} xl={3} className="d-none d-md-block">
        <p className="pt-3 d-flex align-items-center">
          <span className="pe-0 pe-sm-1">Temp. </span>
          <span className="pe-0 pe-sm-1">
            <ThermometerHalf /> :{" "}
          </span>
          <span className="fw-bold ps-0 ps-sm-1">{kelvinToCelsius(day.main.temp)}°C</span>
        </p>

        <p className="d-none d-md-flex align-items-center">
          <span className="d-none d-md-block pe-0 pe-sm-1">Perceived </span>
          <span className="pe-0 pe-sm-1">
            <ThermometerHalf /> :{" "}
          </span>
          <span className="fw-bold ps-0 ps-sm-1">{kelvinToCelsius(day.main.feels_like)}°C</span>
        </p>
      </Col>

      <Col xs={5} sm={4} lg={3} xl={3}>
        <p className="pt-3 d-flex align-items-center justify-content-center">
          <span className="d-none d-md-block pe-0 pe-sm-1">Wind </span>
          <span className="pe-0 pe-sm-1">
            <Wind /> :
          </span>{" "}
          <span className="fw-bold ps-0 ps-sm-1"> {day.wind.speed} m/s</span>
        </p>

        <p className="d-flex align-items-center justify-content-center">
          <span className="d-none d-md-block pe-0 pe-sm-1">Humidity </span>
          <span className="pe-0 pe-sm-1">
            <Moisture /> :{" "}
          </span>
          <span className="fw-bold ps-0 ps-sm-1">{day.main.humidity}%</span>
        </p>
      </Col>
    </Row>
  );
};

export default DataPerHour;
