import React from "react";
import type { WeatherCardProps } from "../../types";

const WeatherCard = (props: WeatherCardProps) => {
  const { city, temp, visibility } = props.cityWeatherReport;
  return (
    <div>
      <h1>{city}</h1>
      <h1>{temp}</h1>
      <h1>{visibility}</h1>
    </div>
  );
};

export default WeatherCard;
