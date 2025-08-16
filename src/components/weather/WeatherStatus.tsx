import type { CurrentWeatherTypes } from "@/types/weather";
import SunComponent from "../SunComponent";
interface WeatherStatusProps {
  weatherData:CurrentWeatherTypes
}
export default function WeatherStatus({weatherData}:WeatherStatusProps) {
  return (
    <div className="flex flex-col gap-5 ">
      <h1 className="mt-6 text-4xl font-semibold">
        {weatherData.name}, <span className="font-extralight">{weatherData.sys.country}</span>
      </h1>
      <h3 className="text-lg text-blue-500">Sunny</h3>
      <div className="flex flex-row gap-8 items-center justify-start">
        <SunComponent />
        <h2 className=" text-5xl">{Math.floor(weatherData.main.feels_like)}&deg;C</h2>
      </div>
    </div>
  );
}
