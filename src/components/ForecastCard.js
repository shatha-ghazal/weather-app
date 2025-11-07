import React from "react";

const ForecastCard = ({ day }) => {
  const getIcon = (desc) => {
    desc = desc.toLowerCase();
    if (desc.includes("sunny")) return "01d";
    if (desc.includes("cloud")) return "03d";
    if (desc.includes("rain")) return "09d";
    if (desc.includes("snow")) return "13d";
    return "01d";
  };

  return (
    <div className="forecast-card">
      <p>{day.date}</p>
      <img
        src={`https://openweathermap.org/img/wn/${getIcon(
          day.hourly[0].weatherDesc[0].value
        )}.png`}
        alt="icon"
      />
      <p>
        {day.mintempC}°C / {day.maxtempC}°C
      </p>
    </div>
  );
};

export default ForecastCard;
