import CitiesList from "@/components/CitiesList";
import SearchField from "@/components/SearchField";
import ForecastList from "@/components/forecast/ForecastList";
import { Particles } from "@/components/magicui/particles";
import WeatherListIndex from "@/components/weather/CurrentWeatherIndex";
import useSearch from "@/hooks/useSearch";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function MainLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const {isPending, data} = useSearch(searchQuery)

  const isLoading = isPending && searchQuery.length > 0

  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
  };
  console.log(isPending)

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-x-hidden rounded-lg bg-background",
        !searchQuery ? "h-screen" : ""
      )}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
      <main className=" container mx-auto p-4 z-10 flex flex-col gap-4">
        <SearchField isLoading={isLoading} onSubmit={handleSearchSubmit} />
        <CitiesList setSearchQuery={setSearchQuery} />
        {searchQuery && (
          <>
            <div className="flex flex-row gap-3 items-center text-stone-300 lg:w-9/12 lg:mx-auto">
              <p className="capitalize text-2xl font-semibold">
                current weather
              </p>
              <p className="text-sm">just now</p>
            </div>
            {data && <WeatherListIndex weatherData={data} />}
            <ForecastList />
          </>
        )}
      </main>
    </div>
  );
}
