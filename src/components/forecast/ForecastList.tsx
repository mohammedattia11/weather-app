import { Calendar } from "lucide-react";
import ForecastCard from "./ForecastCard";
import SunComponent from "../SunComponent";
import RainComponent from "../RainComponent";
import CloudComponent from "../CloudComponent";

export default function ForecastList() {
  return (
    <div className="flex p-4 flex-col rounded-3xl gap-10 bg-gradient-to-r from-[#151D2C]/90 to-[#102824]/90 backdrop-blur-sm w-full border border-secondary-color ">
      <div className="flex flex-row gap-3 pl-4 pt-5 items-center">
        <span className="bg-secondary-color rounded-lg p-2">
          <Calendar className="text-humidity-color" />
        </span>
        <p className="text-3xl font-semibold">5-Day Cosmic Forecast</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4 w-full">
        <ForecastCard icon={<SunComponent size={90}/>}/>
        <ForecastCard icon={<RainComponent size={90}/>}/>
        <ForecastCard icon={<CloudComponent size={90}/>}/>
        <ForecastCard icon={<RainComponent size={90}/>}/>
        <ForecastCard icon={<SunComponent size={90}/>}/>
      </div>
    </div>
  );
}
