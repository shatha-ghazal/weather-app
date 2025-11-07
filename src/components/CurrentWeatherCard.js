import React from "react";

const CurrentWeatherCard = ({ city, data }) => {
  const current = data.current_condition[0];

  const getIcon = (desc) => {
    desc = desc.toLowerCase();
    if (desc.includes("sunny")) return "01d";
    if (desc.includes("cloud")) return "03d";
    if (desc.includes("rain")) return "09d";
    if (desc.includes("snow")) return "13d";
    return "01d";
  };

  return (
    <div className="current-weather-card">
      <h2>{city}</h2>
      <div className="current-weather-main">
        <img
          src={`https://openweathermap.org/img/wn/${getIcon(
            current.weatherDesc[0].value
          )}.png`}
          alt="icon"
        />
        <div className="current-details">
          <h1>{current.temp_C}°C</h1>
          <p>{current.weatherDesc[0].value}</p>
          <p>Humidity: {current.humidity}%</p>
          <p>Wind: {current.windspeedKmph} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
