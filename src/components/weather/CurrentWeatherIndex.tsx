import WeatherData from "./WeatherData";
import WeatherStatus from "./WeatherStatus";

export default function WeatherListIndex() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between my-5 rounded-3xl gap-10 p-6 bg-gradient-to-r from-main-color/80 to-main-color/40 backdrop-blur-sm shadow-[0px_0px_8px_#E1A401] w-full lg:w-9/12 lg:mx-auto">
      <WeatherStatus />
      <WeatherData />
    </div>
  );
}
