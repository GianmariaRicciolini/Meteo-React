import React from "react";
import { Row, Col } from "react-bootstrap";

const WeatherListGroup = ({ day }) => {
  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(0);
  };
  return (
    <Row className="d-flex align-items-baseline">
      <Col>
        <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="Weather Icon" />
      </Col>
      <Col>{day.dt_txt.split(" ")[1].slice(0, -3)}</Col>
      <Col>
        <p>{day.weather[0].main}</p>
      </Col>
      <Col>
        <p>Temperature: {kelvinToCelsius(day.main.temp)}°C</p>
      </Col>
      <Col>
        <p>Feels like: {kelvinToCelsius(day.main.feels_like)}°C</p>
      </Col>
      <Col>
        <p>Wind: {day.wind.speed} m/s</p>
      </Col>
      <Col>
        <p>Humidity: {day.main.humidity}%</p>
      </Col>
    </Row>
  );
};

export default WeatherListGroup;
