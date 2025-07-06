import { Coordinates } from "@/types";

export async function fetchCoordinates(city: string) {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=0361cbb9a191b573c8693c32276a0672`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the data !");
  }

  return response.json();
}

export async function fetchWeather(coordinates: Coordinates) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=0361cbb9a191b573c8693c32276a0672&units=metric`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch the data !");
  }

  return response.json();
}
