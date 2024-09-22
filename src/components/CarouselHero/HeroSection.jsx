import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CarouselCity from "./CarouselCity";

const cities = ["Milan", "Rome", "Barcellona", "Berlin", "Paris"];

function HeroSection() {
  const [weatherData, setWeatherData] = useState([]);

  const fetchData = async () => {
    try {
      const fetchPromises = cities.map(async (city) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c1397fcc1479fba154a81ca832192b0`
        );
        return response.json();
      });

      // Aspetta che tutte le richieste siano completate
      const allWeatherData = await Promise.all(fetchPromises);
      setWeatherData(allWeatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid className="my-5 pb-5 px-0">
      <Row className="m-0 p-0">
        <Col xs={12}>
          <h1 className="text-center fs-big fw-bold my-5 pb-5">Weather around Europe</h1>
        </Col>
        <Col xs={12}>
          <CarouselCity weatherData={weatherData} />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;
