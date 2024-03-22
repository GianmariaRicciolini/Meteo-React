import React from "react";
import WeatherListGroup from "./WeatherListGroup";

const OneDay = ({ weatherData, day }) => {
  const filteredData = weatherData.list.filter((item) => {
    const date = new Date(item.dt_txt.split(" ")[0]);
    return date.getDate() === day.getDate();
  });

  return (
    <>
      {filteredData.map((dayData, index) => (
        <WeatherListGroup key={index} day={dayData} />
      ))}
    </>
  );
};

export default OneDay;
