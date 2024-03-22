import React from "react";
import DataPerHour from "./DataPerHour";

const OneDay = ({ weatherData, day }) => {
  const filteredData = weatherData.list.filter((item) => {
    const date = new Date(item.dt_txt.split(" ")[0]);
    return date.getDate() === day.getDate();
  });

  return (
    <>
      {filteredData.map((dayData, index) => (
        <DataPerHour key={index} day={dayData} />
      ))}
    </>
  );
};

export default OneDay;
