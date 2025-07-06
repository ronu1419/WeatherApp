export type weatherLocation = {
  city: string;
};

export type WeatherData = {
  city: string;
  temp: number;
  description: string;
};

export type WeatherCardProps = {
  cityWeatherReport: WeatherData;
};

export type Coordinates = {
  lat: number;
  lon: number;
};
