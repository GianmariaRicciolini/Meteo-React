import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import WeatherCity from "./components/WeatherCity";

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <WeatherCity />
    </div>
  );
}

export default App;
