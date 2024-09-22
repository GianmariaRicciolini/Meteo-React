// CarouselCity.js
import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import { CaretRightFill, CaretLeftFill } from "react-bootstrap-icons";
import { getWeatherIconUrl } from "../helpers";
import Milan from "../../assets/img/Duomo_Milan.jpg";
import Rome from "../../assets/img/Colosseo.jpg";
import Paris from "../../assets/img/Paris.jpg";
import Barcellona from "../../assets/img/SagradaFamilia.jpg";
import Berlin from "../../assets/img/Berlin.jpg";

const getCityImage = (cityName) => {
  switch (cityName.toLowerCase()) {
    case "milan":
      return Milan;
    case "rome":
      return Rome;
    case "paris":
      return Paris;
    case "barcelona":
      return Barcellona;
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
              <Col xs={2} className="d-flex justify-content-end pe-0">
                <CaretLeftFill className="fill-primary carousel-arrow" size={iconSize} />
              </Col>
              <Col xs={8} className="text-center">
                <Row>
                  <Col xs={6} className="">
                    <Row className="ps-5">
                      <Col xs={12} className="d-flex">
                        <h5 className="card-title fs-giant fw-bold my-3">{cityData.name}</h5>
                        <img
                          src={weatherIconUrl}
                          alt={cityData.weather[0].description}
                          style={{ width: "120px", height: "120px" }}
                        />
                      </Col>
                      <div className="mt-auto d-flex flex-column text-start">
                        <Col xs={12}>
                          <p className="fs-4">
                            <strong>Weather:</strong> {cityData.weather[0].description}
                          </p>
                          <p className="fs-4">
                            <strong>Temperature:</strong> {(cityData.main.temp - 273.15).toFixed(2)}°C
                          </p>

                          <p className="fs-4">
                            <strong>Humidity:</strong> {cityData.main.humidity}%
                          </p>
                          <p className="fs-4">
                            <strong>Wind Speed:</strong> {cityData.wind.speed} m/s
                          </p>
                        </Col>
                      </div>
                    </Row>
                  </Col>
                  <Col xs={6}>
                    <img
                      src={cityImageUrl}
                      alt={`Image of ${cityData.name}`}
                      // className="img-fluid"
                      style={{ height: "100%", maxWidth: "660px" }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={2} className="d-flex justify-content-start ps-0">
                <CaretRightFill className="fill-primary carousel-arrow" size={iconSize} />
              </Col>
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CarouselCity;
