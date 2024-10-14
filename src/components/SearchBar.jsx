import React, { useState } from "react";
import { Form } from "react-bootstrap";
import CitySuggestion from "./CitySuggestion"; // Corretto il nome dell'import

const SearchBar = ({ uniqueCities }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowSuggestions(true);
    setActiveIndex(-1); // Resetta l'indice attivo quando l'utente digita
  };

  const filteredCities = uniqueCities
    .filter((city) => city.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
    .slice(0, 999);

  const handleCitySelect = (cityName) => {
    setSearchTerm(cityName); // Aggiorna il campo di input con il nome della città selezionata
    setShowSuggestions(false); // Nasconde i suggerimenti dopo la selezione
    setActiveIndex(-1);
    const encodedCity = encodeURIComponent(cityName);
    window.location.href = `/weather/${encodedCity}`; // Naviga alla nuova pagina
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      // Trova la città corrispondente tra quelle suggerite
      const matchedCity = uniqueCities.find((city) => city.name.toLowerCase() === searchTerm.toLowerCase());

      if (matchedCity) {
        // Se la città è valida, reindirizza con il nome corretto
        const encodedCity = encodeURIComponent(matchedCity.name);
        window.location.href = `/weather/${encodedCity}`;
      } else {
        // Se la città non è trovata, puoi reindirizzare a una pagina di errore o mostrare un messaggio
        window.location.href = `/404`;
      }
    }
  };

  // Gestire le frecce e il tasto Enter
  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      // Freccia giù - incrementa l'indice attivo
      setActiveIndex((prevIndex) => (prevIndex < filteredCities.length - 1 ? prevIndex + 1 : 0));
    } else if (event.key === "ArrowUp") {
      // Freccia su - decrementa l'indice attivo
      setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : filteredCities.length - 1));
    } else if (event.key === "Enter" && activeIndex >= 0) {
      // Se si preme Enter e c'è un elemento attivo, seleziona l'elemento
      event.preventDefault();
      handleCitySelect(filteredCities[activeIndex].name); // Seleziona la città e cambia pagina
    }
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Form onSubmit={handleSubmit} className="py-3 d-flex justify-content-end ms-auto align-items-center">
        <h4 className="pe-3 fs-2 m-0 fw-bold d-none d-md-block">Search Your City!</h4>
        <div style={{ position: "relative" }} className="d-none d-md-block w-50">
          <Form.Control
            type="text"
            placeholder="Search cities..."
            value={searchTerm}
            onChange={handleChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            onKeyDown={handleKeyDown} // Ascolta gli eventi della tastiera
            className="border-3 border-black bg-light w-75 ms-auto me-4"
          />
          {showSuggestions && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "white",
                zIndex: 1000,
                border: "1px solid #ccc",
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              <CitySuggestion
                searchTerm={searchTerm}
                onCitySelect={handleCitySelect}
                uniqueCities={filteredCities} // Passa la lista filtrata
                activeIndex={activeIndex} // Passa l'indice attivo
                setActiveIndex={setActiveIndex} // Permette l'aggiornamento dell'indice attivo
              />
            </div>
          )}
        </div>

        <div style={{ position: "relative" }} className="d-block d-md-none w-100">
          <Form.Control
            type="text"
            placeholder="Search cities..."
            value={searchTerm}
            onChange={handleChange}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
            onKeyDown={handleKeyDown} // Ascolta gli eventi della tastiera
            className="border-3 border-black bg-light w-75 ms-auto me-4"
          />
          {showSuggestions && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "white",
                zIndex: 1000,
                border: "1px solid #ccc",
                maxHeight: "200px",
                overflowY: "auto",
              }}
            >
              <CitySuggestion
                searchTerm={searchTerm}
                onCitySelect={handleCitySelect}
                uniqueCities={filteredCities} // Passa la lista filtrata
                activeIndex={activeIndex} // Passa l'indice attivo
                setActiveIndex={setActiveIndex} // Permette l'aggiornamento dell'indice attivo
              />
            </div>
          )}
        </div>
      </Form>
    </div>
  );
};

export default SearchBar;
