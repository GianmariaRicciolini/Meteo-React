import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import CityData from "./components/CarouselDays/CityData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

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
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
