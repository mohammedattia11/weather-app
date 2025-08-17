import { useWeather } from "@/hooks/useWeather";
import { Droplets, Gauge, Thermometer, Wind } from "lucide-react";
import WeatherCard from "./WeatherCard";

export default function WeatherData() {
  const { weatherData } = useWeather();
  return (
    <div className="flex flex-col justify-center lg:w-9/12">
      <h2 className="p-4 text-xl font-semibold">Current Weather</h2>
      <div className="grid w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2">
        <WeatherCard
          title="degree"
          icon={<Thermometer />}
          value={Math.floor(weatherData?.main.feels_like ?? 0)}
        />
        <WeatherCard
          title="humidity"
          icon={<Droplets />}
          value={weatherData?.main.humidity ?? 0}
        />
        <WeatherCard
          title="wind Speed"
          icon={<Wind />}
          value={weatherData?.wind.speed ?? 0}
        />
        <WeatherCard
          title="pressure"
          icon={<Gauge />}
          value={weatherData?.main.pressure ?? 0}
        />
        <WeatherCard
          title="visibility"
          icon={<Thermometer />}
          value={
            typeof weatherData?.visibility === "number"
              ? weatherData.visibility / 1000
              : 0
          }
        />
      </div>
    </div>
  );
}
