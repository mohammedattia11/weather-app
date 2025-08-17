import type { CurrentWeatherTypes } from "@/types/weather";
import { Droplets, Gauge, Thermometer, Wind } from "lucide-react";
import WeatherCard from "./WeatherCard";
interface WeatherDataProps {
  weatherData: CurrentWeatherTypes;
}

export default function WeatherData({ weatherData }: WeatherDataProps) {
  return (
    <div className="flex flex-col justify-center lg:w-9/12">
      <h2 className="p-4 text-xl font-semibold">Current Weather</h2>
      <div className="grid w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2">
        <WeatherCard
          title="degree"
          icon={<Thermometer />}
          value={Math.floor(weatherData.main.feels_like)}
        />
        <WeatherCard
          title="humidity"
          icon={<Droplets />}
          value={weatherData.main.humidity}
        />
        <WeatherCard
          title="wind Speed"
          icon={<Wind />}
          value={weatherData.wind.speed}
        />
        <WeatherCard
          title="pressure"
          icon={<Gauge />}
          value={weatherData.main.pressure}
        />
        <WeatherCard
          title="visibility"
          icon={<Thermometer />}
          value={weatherData.visibility / 1000}
        />
      </div>
    </div>
  );
}
