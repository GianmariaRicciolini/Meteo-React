import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import OneDay from "./OneDay";

const CarouselDays = ({ weatherData }) => {
  const uniqueDays = Array.from(new Set(weatherData.list.map((item) => item.dt_txt.split(" ")[0])));

  const uniqueDateObjects = uniqueDays.map((day) => new Date(day));

  return (
    <Carousel interval={null} prevIcon={null} nextIcon={null} indicators={false}>
      {uniqueDateObjects.map((day, index) => (
        <Carousel.Item key={index}>
          <Row>
            <Col>
              <h5 className="card-title text-center fs-big my-3">{day.toDateString()}</h5>
              <OneDay weatherData={weatherData} day={day} />
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselDays;
