import type { WeatherTypes } from "@/types/weather";
import WeatherData from "./components/WeatherData";
import WeatherStatus from "./components/WeatherStatus";
interface WeatherListIndexProps {
  weatherData: WeatherTypes;
}
export default function Weather({
  weatherData,
}: WeatherListIndexProps) {
  console.log(weatherData);
  return (
    <div className="from-main-color/80 to-main-color/40 mb-5 flex w-full flex-col gap-10 rounded-3xl bg-gradient-to-r p-6 shadow-[0px_0px_8px_#E1A401] backdrop-blur-sm lg:mx-auto lg:w-9/12 lg:flex-row lg:justify-between">
      <WeatherStatus weatherData={weatherData} />
      <WeatherData weatherData={weatherData} />
    </div>
  );
}
