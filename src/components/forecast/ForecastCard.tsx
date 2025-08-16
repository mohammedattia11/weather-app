import { Droplets, Wind } from "lucide-react";
import ForecastData from "./ForecastData";
interface ForecastProps {
  icon: React.ReactNode;
}
export default function ForecastItem({ icon }: ForecastProps) {
  return (
    <div className=" flex flex-col bg-gradient-to-r from-main-color/80 to-main-color/40 rounded-3xl p-6 text-stone-300 hover:scale-110 duration-500 cursor-pointer">
      <p className="capitalize font-semibold text-xl mb-3">today</p>
      <p className="capitalize text-sm ">sunny</p>
      <div className="flex flex-col items-center gap-2">
        {icon}
        <div className="flex flex-row gap-3 items-center text-xl">
          <p className="text-2xl font-semibold">32°</p>
          <p>23°</p>
        </div>
        <p className="text-sm">°C</p>
      </div>
      <ForecastData description="Humidity" value={61} icon={<Droplets />} />
      <ForecastData description="Wind Speed" value={9} icon={<Wind />} />
      <ForecastData description="Precipitation" value={7} icon={<Droplets />} />
    </div>
  );
}
