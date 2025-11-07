import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CityCards from "./components/CityCards";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastCard from "./components/ForecastCard";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [forecastDays, setForecastDays] = useState(3); // default 3-day forecast

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(false);
    setWeatherData(null);

    try {
      const res = await fetch(`https://wttr.in/${cityName}?format=j1`);
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setCity(cityName);
      setWeatherData(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar fetchWeather={fetchWeather} />
      <CityCards fetchWeather={fetchWeather} />

      <div className="forecast-toggle">
        <button onClick={() => setForecastDays(3)}>3 Days</button>
        <button onClick={() => setForecastDays(10)}>10 Days</button>
      </div>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">City not found!</div>}

      {weatherData && (
        <>
          <CurrentWeatherCard city={city} data={weatherData} />
          <div className="forecast-section">
            {weatherData.weather
              .slice(0, forecastDays)
              .map((day, idx) => (
                <ForecastCard key={idx} day={day} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
