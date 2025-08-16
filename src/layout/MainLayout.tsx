import CitiesList from "@/components/CitiesList";
import Container from "@/components/Container";
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
        <Container/>
        <CitiesList/>
        <div className="flex flex-row gap-3 items-center text-stone-300 lg:w-9/12 lg:mx-auto">
          <p className="capitalize text-2xl font-semibold">current weather</p>
          <p className="text-sm">just now</p>
        </div>
        <WeatherListIndex/>
        <ForecastList/>
      </main>
    </div>
  );
}
