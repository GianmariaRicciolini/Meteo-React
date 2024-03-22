import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import WeatherDayData from "./WeatherDayData";

const WeatherCity = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/forecast?q=Milan&appid=0c1397fcc1479fba154a81ca832192b0"
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {weatherData && (
        <div>
          <div className="d-flex align-items-center">
            <h1>{weatherData.city.name}</h1>
            <img
              src={`http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
          <h4 className="mb-2 text-muted">{weatherData.list[0].weather[0].description}</h4>
          <WeatherDayData weatherData={weatherData} />
        </div>
      )}
    </Container>
  );
};

export default WeatherCity;
