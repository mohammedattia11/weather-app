import ForecastList from "@/components/forecast/ForecastList";
import { Particles } from "@/components/magicui/particles";
import WeatherListIndex from "@/components/weather/CurrentWeatherIndex";

export default function MainLayout() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-x-hidden rounded-lg bg-background">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
      <main className=" container mx-auto p-4 z-10 flex flex-col gap-4">
        <WeatherListIndex/>
        <ForecastList/>
      </main>
    </div>
  );
}
