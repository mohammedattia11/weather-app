import CitiesList from "@/components/ui/CitiesList";
import Header from "@/components/ui/Header";
import SearchField from "@/components/ui/SearchField";
import { Spinner } from "@/components/ui/Spinner";
import { Particles } from "@/components/ui/particles";
import Forecast from "@/feature/forecast/Forecast";
import Weather from "@/feature/weather/Weather";
import { useWeather } from "@/hooks/useWeather";
import { cn } from "@/lib/utils";

export default function MainLayout() {
  const { shouldShowWeather, weatherData, forecastData, isLoading } = useWeather();
  return (
    <div
      className={cn(
        "bg-background relative flex w-full flex-col items-center justify-center overflow-x-hidden rounded-lg",
        !shouldShowWeather ? "h-screen justify-start" : "",
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
        {isLoading ? <Spinner variant="circle-filled" size={80}/> : (
          <>
            {weatherData && <Weather />}
            {forecastData && <Forecast />}
          </>
        )}
      </main>
    </div>
  );
}
