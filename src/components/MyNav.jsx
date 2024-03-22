import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CitySearch from "./CitySearch";
import WeatherCard from "./WeatherCard";

function MyNav() {
  const [selectedCity, setSelectedCity] = useState(""); // Stato per la città selezionata

  const handleCitySelect = (cityName) => {
    setSelectedCity(cityName); // Aggiorna lo stato della città selezionata
  };

  return (
    <>
      <Navbar expand="lg" className="bg-info-subtle">
        <Container>
          <Navbar.Brand href="#home">MyMeteo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
            </Nav>
            {/* Passa la funzione handleCitySelect al componente CitySearch */}
            <CitySearch onSelectCity={handleCitySelect} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <WeatherCard cityName={selectedCity} /> {/* Passa il nome della città selezionata come prop a WeatherCard */}
    </>
  );
}

export default MyNav;
