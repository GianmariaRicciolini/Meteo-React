import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import CityData from "./components/CityData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <MyNav />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather/:city" element={<CityData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
