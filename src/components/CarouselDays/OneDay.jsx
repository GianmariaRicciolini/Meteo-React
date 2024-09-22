import React from "react";
import DataPerHour from "./DataPerHour";
import { CaretRightFill, CaretLeftFill } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";

const OneDay = ({ weatherData, day }) => {
  const filteredData = weatherData.list.filter((item) => {
    const date = new Date(item.dt_txt.split(" ")[0]);
    return date.getDate() === day.getDate();
  });

  const iconSize = "40px";

  return (
    <Row className="align-items-center">
      <Col md={1}>
        <CaretLeftFill className="m-auto fill-primary" size={iconSize} />
      </Col>
      <Col md={10}>
        {filteredData.map((dayData, index) => (
          <DataPerHour key={index} day={dayData} />
        ))}
      </Col>
      <Col md={1}>
        <CaretRightFill className="m-auto fill-primary" size={iconSize} />
      </Col>
    </Row>
  );
};

export default OneDay;
