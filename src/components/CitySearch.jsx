import React, { useState } from "react";
import citiesList from "../data/city.list.json";

const CitySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredCities = citiesList.filter((city) => city.name.toLowerCase().includes(value.toLowerCase()));
    setSearchResults(filteredCities);
  };

  return (
    <div>
      <input type="text" placeholder="Search for a city..." value={searchTerm} onChange={handleChange} />
      <ul>
        {searchResults.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CitySearch;
