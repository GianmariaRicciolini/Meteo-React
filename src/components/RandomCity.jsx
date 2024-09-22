import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import cities from "../data/city.list.json"; // Import JSON
import MeteoCityCard from "./MeteoCityCard";

const API_KEY = "0c1397fcc1479fba154a81ca832192b0"; // My API key

function getRandomCities(cityList, count) {
  const shuffled = [...cityList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function RadomCity() {
  const [cityData, setCityData] = useState([]);
  const [loading, setLoading] = useState(true); // Stato per gestire il caricamento

  useEffect(() => {
    let isCancelled = false; // Variabile per gestire il cleanup e prevenire doppie fetch

    const fetchWeatherData = async () => {
      setLoading(true);
      const randomCities = getRandomCities(cities, 9); // Seleziona 9 città casuali

      const promises = randomCities.map((city) =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`)
          .then((response) => response.json())
          .then((data) => {
            if (!isCancelled) {
              // Controlla se il fetch è stato annullato
              console.log(data); // Fai il log dei dati appena ricevuti
              return {
                name: data.name,
                country: data.sys.country, // Usa sys.country per il paese
                temp: data.main.temp,
                weather: data.weather[0].description,
                icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
              };
            }
          })
          .catch((err) => console.error("Errore nella fetch", err))
      );

      const results = await Promise.all(promises);
      if (!isCancelled) {
        setCityData(results);
        setLoading(false);
      }
    };

    fetchWeatherData();

    return () => {
      isCancelled = true; // Annulla la fetch se il componente si smonta
    };
  }, []);

  return (
    <Container className="py-5 my-5">
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Caricamento...</p>
        </div>
      ) : (
        <Row className="gap-5 d-flex justify-content-around">
          {cityData.map((data, index) => (
            <Col key={index} xs={12} sm={6} md={4} xxl={3}>
              <MeteoCityCard cityMeteo={data} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default RadomCity;
