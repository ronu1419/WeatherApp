import React from "react";
import type { WeatherCardProps } from "../../types";
import { convertToTitleCase } from "../utils/text";

const WeatherCard = (props: WeatherCardProps) => {
  const { city, temp, description } = props.cityWeatherReport;

  return (
    <div>
      <h1>{city}</h1>
      <h1>{temp}</h1>
      <h1>{convertToTitleCase(description)}</h1>
    </div>
  );
};

export default WeatherCard;
