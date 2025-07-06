export type weatherLocation = {
  city: string;
};

export type WeatherData = {
  city: string;
  temp: number;
  visibility: number;
};

export type WeatherCardProps = {
  cityWeatherReport: WeatherData;
};

export type Coordinates = {
  lat: number;
  lon: number;
};
