import { Droplets, Gauge, Thermometer, Wind } from "lucide-react";
import WeatherCard from "./WeatherCard";
import type { CurrentWeatherTypes } from "@/types/weather";
interface WeatherDataProps {
  weatherData:CurrentWeatherTypes
}

export default function WeatherData({weatherData}:WeatherDataProps) {
  return (
    <div className="flex flex-col justify-center lg:w-9/12">
      <h2 className="text-xl font-semibold p-4">Current Weather</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 w-full">
        <WeatherCard title="degree" icon={<Thermometer />} value={Math.floor(weatherData.main.feels_like)} />
        <WeatherCard title="humidity" icon={<Droplets />} value={weatherData.main.humidity} />
        <WeatherCard title="wind Speed" icon={<Wind />} value={weatherData.wind.speed} />
        <WeatherCard title="pressure" icon={<Gauge />} value={weatherData.main.pressure} />
        <WeatherCard title="visibility" icon={<Thermometer />} value={weatherData.visibility /1000} />
      </div>
    </div>
  );
}
