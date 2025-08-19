import CitiesList from "@/components/ui/CitiesList";
import Error from "@/components/ui/Error";
import Header from "@/components/ui/Header";
import SearchField from "@/components/ui/SearchField";
import { Spinner } from "@/components/ui/Spinner";
import { Particles } from "@/components/ui/particles";
import Forecast from "@/feature/forecast/Forecast";
import Weather from "@/feature/weather/Weather";
import { useWeather } from "@/hooks/useWeather";
import { cn } from "@/lib/utils";

export default function MainLayout() {
  const {  weatherData, forecastData, isLoading, weatherError } = useWeather();
  if(weatherError) console.log(weatherError.message)
  return (
    <div
      className={cn(
        "bg-background h-screen justify-start relative flex w-full flex-col items-center overflow-x-hidden rounded-lg",
        
      )}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
      <main className="z-10 container items-center flex flex-col gap-4 p-4">
        <Header />
        <SearchField />
        <CitiesList />
        {isLoading ? <Spinner variant="circle-filled" size={80}/> : weatherError? <Error>{weatherError.message}</Error> : (
          <>
            {weatherData && <Weather />}
            {forecastData && <Forecast />}
          </>
        )}
      </main>
    </div>
  );
}
