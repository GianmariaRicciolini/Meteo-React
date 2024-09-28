// CityData.js
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarouselDays from "./CarouselDays";
import { getWeatherIconUrl } from "../helpers";

const CityData = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    const city = parts[2];

    if (city) {
      fetchData(city);
    }
  }, []);

  const fetchData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0c1397fcc1479fba154a81ca832192b0`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const kelvinToCelsius = (tempKelvin) => {
    return (tempKelvin - 273.15).toFixed(0);
  };

  return (
    <Container className="pb-5 bg-light" style={{ minHeight: "100vh" }}>
      {weatherData && (
        <>
          <div className="d-flex flex-column align-items-center my-5">
            <Row className="text-center">
              <Col xs={12} className="d-flex px-0">
                <h1 className="fs-carousel-giant fw-bold pe-1 pe-sm-2 pe-xxl-5 m-0">
                  {weatherData.city.name},{weatherData.city.country}
                </h1>
                <img
                  src={getWeatherIconUrl(weatherData.list[0].weather[0].icon)}
                  alt="Weather Icon"
                  className="bg-primary-subtle rounded-circle overflow-hidden carousel-icon"
                />
              </Col>
            </Row>
            <Row className="text-center">
              <Col xs={12} className="d-flex">
                <h2 className="fs-carousel-big mb-2 text-muted pe-5">{weatherData.list[0].weather[0].description}</h2>
                <h2 className="fs-carousel-big">{kelvinToCelsius(weatherData.list[0].main.temp)}°C</h2>
              </Col>
            </Row>
          </div>
          <CarouselDays weatherData={weatherData} />
        </>
      )}
    </Container>
  );
};

export default CityData;
