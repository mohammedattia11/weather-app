import { Droplets, Gauge, Thermometer, Wind } from "lucide-react";
import WeatherCard from "./WeatherCard";

export default function WeatherData() {
  return (
    <div className="flex flex-col justify-center lg:w-9/12">
      <h2 className="text-xl font-semibold p-4">Current Weather</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 w-full">
        <WeatherCard title="degree" icon={<Thermometer />} value={"29"} />
        <WeatherCard title="humidity" icon={<Droplets />} value={"83"} />
        <WeatherCard title="wind Speed" icon={<Wind />} value={"15"} />
        <WeatherCard title="pressure" icon={<Gauge />} value={"1,024"} />
        <WeatherCard title="visibility" icon={<Thermometer />} value={"14"} />
      </div>
    </div>
  );
}
