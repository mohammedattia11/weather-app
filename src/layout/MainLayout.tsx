import CitiesList from "@/components/CitiesList";
import SearchField from "@/components/SearchField";
import ForecastList from "@/components/forecast/ForecastList";
import { Particles } from "@/components/magicui/particles";
import WeatherListIndex from "@/components/weather/CurrentWeatherIndex";
import { useLocation } from "@/hooks/useLocation";
import useSearch from "@/hooks/useSearch";
import { cn } from "@/lib/utils";
import { type CurrentWeatherTypes } from "@/types/weather";
import { useEffect, useState } from "react";

export default function MainLayout() {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [coords, setCoords] = useState<
    { lat: number; lon: number } | undefined
  >(undefined);
  const { getCurrentLocation, coordinates } = useLocation();

  useEffect(() => {
    if (coordinates) {
      setCoords({ lat: coordinates.latitude, lon: coordinates.longitude });
    }
  }, [coordinates]);

  const { isPending: isWeatherLoading, data: weatherData } =
    useSearch<CurrentWeatherTypes>(searchQuery, "weather", coords);
  const { data: forecastData } = useSearch<CurrentWeatherTypes[]>(
    searchQuery,
    "forecast",
    coords,
  );
  const shouldShowWeather = !!(searchQuery || coords);
  const isLoading = isWeatherLoading && shouldShowWeather;

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setCoords(undefined);
  };

  const handleGeoSearch = () => {
    setSearchQuery(null);
    getCurrentLocation();
  };

  return (
    <div
      className={cn(
        "bg-background relative flex w-full flex-col items-center justify-center overflow-x-hidden rounded-lg",
        !shouldShowWeather ? "h-screen" : "",
      )}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
      <main className="z-10 container mx-auto flex flex-col gap-4 p-4">
        <SearchField
          onGeoSearch={handleGeoSearch}
          isLoading={isLoading}
          onSubmit={handleSearchSubmit}
        />
        <CitiesList setCoords={setCoords} setSearchQuery={setSearchQuery} />
        {shouldShowWeather && (
          <>
            <div className="flex flex-row items-center gap-3 text-stone-300 lg:mx-auto lg:w-9/12">
              <p className="text-2xl font-semibold capitalize">
                current weather
              </p>
              <p className="text-sm">just now</p>
            </div>
            {weatherData && <WeatherListIndex weatherData={weatherData} />}
            {forecastData && <ForecastList forecastData={forecastData} />}
          </>
        )}
      </main>
    </div>
  );
}
