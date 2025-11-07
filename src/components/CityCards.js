import React from "react";

const popularCities = ["London", "New York", "Tokyo", "Paris", "Dubai"];

const CityCards = ({ fetchWeather }) => {
  return (
    <div className="city-cards">
      {popularCities.map((city) => (
        <div
          key={city}
          className="city-card"
          onClick={() => fetchWeather(city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
};

export default CityCards;
