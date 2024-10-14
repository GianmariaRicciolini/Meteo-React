import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import CityData from "./components/CarouselDays/CityData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import cities from "./data/city.list.json";

function App() {
  const [uniqueCities, setUniqueCities] = useState([]);

  useEffect(() => {
    const createUniqueCities = () => {
      const seenNames = new Set();
      const filteredCities = cities.filter((city) => {
        const lowerCaseName = city.name.toLowerCase();
        if (seenNames.has(lowerCaseName)) {
          return false;
        } else {
          seenNames.add(lowerCaseName);
          return true;
        }
      });

      const sortedCities = filteredCities.sort((a, b) => a.name.localeCompare(b.name));
      setUniqueCities(sortedCities);
      // console.log("Unique Cities:", sortedCities, "Length:", sortedCities.length); // Log con lunghezza
    };

    createUniqueCities();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-light">
        <header>
          <MyNav uniqueCities={uniqueCities} />
        </header>
        <Routes>
          <Route path="/" element={<HomePage uniqueCities={uniqueCities} />} />
          <Route path="/weather/:city" element={<CityData />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
