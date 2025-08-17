import CitiesList from "@/components/CitiesList";
import SearchField from "@/components/SearchField";
import ForecastList from "@/components/forecast/ForecastList";
import { Particles } from "@/components/magicui/particles";
import WeatherListIndex from "@/components/weather/CurrentWeatherIndex";
import useSearch from "@/hooks/useSearch";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { type CurrentWeatherTypes } from "@/types/weather";
import { type ForecastWeatherTypes } from "@/types/forecast";

export default function MainLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isPending:isWeatherLoading, data:weatherData } = useSearch<CurrentWeatherTypes>(searchQuery,"weather");
  const { data:forecastData } = useSearch<ForecastWeatherTypes>(searchQuery,"forecast");
  

  const isLoading = isWeatherLoading && searchQuery.length > 0;

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
  };
  return (
    <div
      className={cn(
        "bg-background relative flex w-full flex-col items-center justify-center overflow-x-hidden rounded-lg",
        !searchQuery ? "h-screen" : "",
      )}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
      <main className="z-10 container mx-auto flex flex-col gap-4 p-4">
        <SearchField isLoading={isLoading} onSubmit={handleSearchSubmit} />
        <CitiesList setSearchQuery={setSearchQuery} />
        {searchQuery && (
          <>
            <div className="flex flex-row items-center gap-3 text-stone-300 lg:mx-auto lg:w-9/12">
              <p className="text-2xl font-semibold capitalize">
                current weather
              </p>
              <p className="text-sm">just now</p>
            </div>
            {weatherData && <WeatherListIndex weatherData={weatherData} />}
             {forecastData &&<ForecastList forecastData={forecastData} />}
          </>
        )}
      </main>
    </div>
  );
}
