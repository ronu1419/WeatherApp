"use client";

import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import { Coordinates, WeatherData } from "../../types";
import { fetchCoordinates, fetchWeather } from "../library/fetchWeather";

const WeatherPage = () => {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const handleSubmit = async () => {
    try {
      const data = await fetchCoordinates(cityName);
      const coordinates: Coordinates = { lat: data[0].lat, lon: data[0].lon };
      const getCityWeather = await fetchWeather(coordinates);
      setWeatherData({
        city: getCityWeather.name,
        temp: getCityWeather.main.temp,
        description: getCityWeather.weather[0].description,
      });
    } catch (err) {
      console.error("Failed to fetch data", err);
    }
  };

  return (
    <div>
      <input
        placeholder="Enter city name"
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
      ></input>
      <button onClick={handleSubmit}>Submit</button>
      {weatherData && <WeatherCard cityWeatherReport={weatherData} />}
    </div>
  );
};

export default WeatherPage;
