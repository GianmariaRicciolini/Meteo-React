import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import CityData from "./components/CityData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-light">
        <header>
          <MyNav />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather/:city" element={<CityData />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
