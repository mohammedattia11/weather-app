import { Calendar } from "lucide-react";
import ForecastCard from "./components/ForecastCard";
import { useWeather } from "@/hooks/useWeather";

export default function Forecast() {
  const {forecastData} = useWeather()
  return (
    <div className="border-secondary-color flex w-full flex-col gap-10 rounded-3xl border bg-gradient-to-r from-[#151D2C]/90 to-[#102824]/90 p-4 backdrop-blur-sm">
      <div className="flex flex-row items-center gap-3 pt-5 pl-4">
        <span className="bg-secondary-color rounded-lg p-2">
          <Calendar className="text-humidity-color" />
        </span>
        <p className="text-3xl font-semibold">5-Days Cosmic Forecast</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-5">
        {forecastData?.map((item) => (
          <ForecastCard forecastData={item} key={item.dt} />
        ))}
      </div>
    </div>
  );
}
