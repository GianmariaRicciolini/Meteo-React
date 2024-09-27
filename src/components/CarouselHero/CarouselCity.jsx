// CarouselCity.js
import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import { CaretRightFill, CaretLeftFill } from "react-bootstrap-icons";
import { getWeatherIconUrl } from "../helpers";
import { Link } from "react-router-dom";
import Milan from "../../assets/img/Duomo_Milan.jpg";
import Rome from "../../assets/img/Colosseo.jpg";
import Paris from "../../assets/img/Paris.jpg";
import Berlin from "../../assets/img/Berlin.jpg";
import Madrid from "../../assets/img/Madrid_panorama.jpg";

const getCityImage = (cityName) => {
  switch (cityName.toLowerCase()) {
    case "milan":
      return Milan;
    case "rome":
      return Rome;
    case "paris":
      return Paris;
    case "madrid":
      return Madrid;
    case "berlin":
      return Berlin;
    default:
      return null;
  }
};

const CarouselCity = ({ weatherData }) => {
  // Verifica che ci siano dati disponibili
  const iconSize = "80px";

  if (weatherData.length === 0) return <p>Loading...</p>;

  return (
    <Carousel interval={null} prevIcon={null} nextIcon={null} indicators={false}>
      {weatherData.map((cityData, index) => {
        const weatherIconUrl = getWeatherIconUrl(cityData.weather[0].icon);
        const cityImageUrl = getCityImage(cityData.name);

        return (
          <Carousel.Item key={index} style={{ height: "423px" }}>
            <Row className="align-items-center">
              <Col md={4} lg={1} className="d-none d-md-flex justify-content-center pe-0">
                <CaretLeftFill className="fill-primary carousel-arrow me-2" size={iconSize} />
              </Col>
              <Col md={4} lg={10} className="text-center">
                <Link to={`/weather/${cityData.name}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <Row>
                    <Col md={12} lg={6} xl={5} className="d-flex justify-content-end">
                      <Row className="ps-5">
                        <Col xs={12} className="d-flex">
                          <h5 className="card-title fs-giant fw-bold my-3 pe-4">{cityData.name}</h5>
                          <img
                            src={weatherIconUrl}
                            alt={cityData.weather[0].description}
                            className="bg-primary-subtle rounded-circle overflow-hidden meteo-icon"
                          />
                        </Col>
                        <div className="mt-auto d-flex flex-column text-start">
                          <Col xs={12}>
                            <p className="fs-4 fs-md-5 fs-lg-4">
                              <strong>Weather:</strong> {cityData.weather[0].description}
                            </p>
                            <p className="fs-4 fs-md-5 fs-lg-4">
                              <strong>Temperature:</strong> {(cityData.main.temp - 273.15).toFixed(2)}°C
                            </p>

                            <p className="fs-4 fs-md-5 fs-lg-4">
                              <strong>Humidity:</strong> {cityData.main.humidity}%
                            </p>
                            <p className="fs-4 fs-md-5 fs-lg-4">
                              <strong>Wind Speed:</strong> {cityData.wind.speed} m/s
                            </p>
                          </Col>
                        </div>
                      </Row>
                    </Col>
                    <Col lg={6} xl={7} className="d-none d-lg-block overflow-hidden">
                      <img src={cityImageUrl} alt={`Image of ${cityData.name}`} className="img-carousel img-fluid" />
                    </Col>
                  </Row>
                </Link>
              </Col>
              <Col md={4} lg={1} className="d-none d-md-flex justify-content-center ps-0">
                <CaretRightFill className="fill-primary carousel-arrow ms-2" size={iconSize} />
              </Col>
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselCity;
