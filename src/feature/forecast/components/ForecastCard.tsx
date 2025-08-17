import MoonCloudComponent from "@/components/cosmic/MoonCloudComponent";
import SunComponent from "@/components/cosmic/SunComponent";
import type { WeatherTypes } from "@/types/weather";
import { Droplets, Wind } from "lucide-react";
import ForecastData from "./ForecastData";
interface ForecastProps {
  forecastData: WeatherTypes;
}
export default function ForecastCard({ forecastData }: ForecastProps) {
  const now = forecastData.dt;
  const sunrise = forecastData.sys.sunrise;
  const sunset = forecastData.sys.sunset;
  const isDay = now >= sunrise && now < sunset;
  return (
    <div className="from-main-color/80 to-main-color/40 flex cursor-pointer flex-col rounded-3xl bg-gradient-to-r p-6 text-stone-300 duration-500 hover:scale-110">
      <p className="mb-3 text-xl font-semibold capitalize">today</p>
      <p className="text-sm capitalize">{forecastData.weather.at(0)?.main}</p>
      <div className="flex flex-col items-center gap-2">
        {isDay ? <SunComponent /> : <MoonCloudComponent />}
        <div className="flex flex-row items-center gap-3 text-xl">
          <p className="text-2xl font-semibold">
            {Math.floor(forecastData.main.temp_max)}°
          </p>
          <p>{Math.floor(forecastData.main.temp_min)}°</p>
        </div>
        <p className="text-sm">°C</p>
      </div>
      <ForecastData
        description="Humidity"
        value={forecastData.main.humidity}
        icon={<Droplets />}
      />
      <ForecastData
        description="Wind Speed"
        value={forecastData.wind.speed}
        icon={<Wind />}
      />
      <ForecastData
        description="Precipitation"
        value={forecastData.visibility / 1000}
        icon={<Droplets />}
      />
    </div>
  );
}
