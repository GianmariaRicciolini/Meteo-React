import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CarouselDays from "./CarouselDays";

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
    <Container className="pb-5" style={{ minHeight: "100vh" }}>
      {weatherData && (
        <>
          <div className="d-flex flex-column align-items-center my-5">
            <Row className="align-items-center">
              <Col xs={12} md={10}>
                <h1 className="fs-giant fw-bold me-3">{weatherData.city.name}</h1>
              </Col>
              <Col xs={12} md={2}>
                <img
                  src={`http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`}
                  alt="Weather Icon"
                  width="120px"
                  className="ms-3"
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={10}>
                <h2 className="fs-1 mb-2 text-muted">{weatherData.list[0].weather[0].description}</h2>
              </Col>

              <Col xs={12} md={2}>
                <h2 className="fs-1">{kelvinToCelsius(weatherData.list[0].main.temp)}°C</h2>
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
