import React from "react";
import DataPerHour from "./DataPerHour";
import { CaretRightFill, CaretLeftFill } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";

const OneDay = ({ weatherData, day }) => {
  const filteredData = weatherData.list.filter((item) => {
    const date = new Date(item.dt_txt.split(" ")[0]);
    return date.getDate() === day.getDate();
  });

  const iconSize = "60px";

  return (
    <Row className="align-items-center">
      <Col xs={1} className="d-flex justify-content-end pe-0">
        <CaretLeftFill className="fill-primary carousel-arrow" size={iconSize} />
      </Col>
      <Col xs={10}>
        {filteredData.map((dayData, index) => (
          <DataPerHour key={index} day={dayData} />
        ))}
      </Col>
      <Col xs={1} className="d-flex justify-content-start ps-0">
        <CaretRightFill className="fill-primary carousel-arrow" size={iconSize} />
      </Col>
    </Row>
  );
};

export default OneDay;
