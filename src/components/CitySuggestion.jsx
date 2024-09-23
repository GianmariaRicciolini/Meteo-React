import React from "react";
import { Link } from "react-router-dom";

const CitySuggestions = ({ filteredCities, onCitySelect, activeIndex }) => {
  const getCityDisplayName = (city) => {
    return city.state ? `${city.name}, ${city.state}, ${city.country}` : `${city.name}, ${city.country}`;
  };

  return (
    <ul style={{ listStyleType: "none", padding: 0, marginTop: 0 }}>
      {filteredCities.map((city, index) => (
        <li
          key={city.id}
          style={{
            cursor: "pointer",
            padding: "5px",
            borderBottom: "1px solid #ccc",
            backgroundColor: index === activeIndex ? "#ddd" : "transparent", // Evidenzia l'elemento attivo
          }}
          onClick={() => onCitySelect(city.name)}
          className="text-black"
        >
          <Link
            to={`/weather/${encodeURIComponent(city.name)}`}
            className="text-decoration-none text-black"
            onClick={() => onCitySelect(city.name)}
          >
            {getCityDisplayName(city)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CitySuggestions;
