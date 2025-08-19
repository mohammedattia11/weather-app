import type { WeatherTypes } from "@/types/weather";
import { renderWeatherIcon } from "@/utils/renderWeatherIcon";
import { Droplets, Wind } from "lucide-react";
import ForecastData from "./ForecastData";
import { useWeather } from "@/hooks/useWeather";
import { arabicNumberFormater } from "@/utils/arabicNumbersFormater";
interface ForecastProps {
  forecastData: WeatherTypes;
}
export default function ForecastCard({ forecastData }: ForecastProps) {
  const {t} = useWeather()
  const now = forecastData.dt;
  const sunrise = forecastData.sys.sunrise;
  const sunset = forecastData.sys.sunset;
  const isDay = now >= sunrise && now < sunset;
  const forecastStatus = forecastData?.weather.at(0)?.main;
  const forecastIcon =
    forecastStatus && renderWeatherIcon(forecastStatus, isDay);
  return (
    <div className="from-main-color/80 to-main-color/40 flex cursor-pointer flex-col rounded-3xl bg-gradient-to-r p-6 text-stone-300 duration-500 hover:scale-110">
      <p className="mb-3 text-xl font-semibold capitalize">today</p>
      <p className="text-sm capitalize">{t(forecastStatus??"--")}</p>
      <div className="flex flex-col items-center gap-2">
        {forecastIcon}
        <div className="flex flex-row items-center gap-3 text-xl">
          <p className="text-2xl font-semibold">
            {arabicNumberFormater(Math.floor(forecastData.main.temp_max))}°
          </p>
          <p>{arabicNumberFormater(Math.floor(forecastData.main.temp_min))}°</p>
        </div>
        <p className="text-sm">{t("°C")}</p>
      </div>
      <ForecastData
        description="humidity"
        value={forecastData.main.humidity}
        icon={<Droplets />}
      />
      <ForecastData
        description="wind speed"
        value={forecastData.wind.speed}
        icon={<Wind />}
      />
      <ForecastData
        description="precipitation"
        value={forecastData.visibility / 1000}
        icon={<Droplets />}
      />
    </div>
  );
}
