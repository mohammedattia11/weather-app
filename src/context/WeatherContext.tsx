import { useLocation } from "@/hooks/useLocation";
import useSearch from "@/hooks/useSearch";
import type { WeatherTypes } from "@/types/weather";
import { createContext, type ReactNode, useEffect, useState } from "react";

type Coords = { lat: number; lon: number } | undefined;

interface WeatherContextType {
  searchQuery: string | null;
  coords: Coords;
  weatherData: WeatherTypes | undefined;
  forecastData: WeatherTypes[] | undefined;
  isLoading: boolean;
  shouldShowWeather: boolean;
  setSearchQuery: (value: string) => void,
  setCoords: (value: { lat: number; lon: number } | undefined) => void;
  handleSearchSubmit: (query: string) => void;
  handleGeoSearch: () => void;
}
//eslint-disable-next-line
export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined,
);
export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [coords, setCoords] = useState<Coords>(undefined);
  const { getCurrentLocation, coordinates } = useLocation();

  useEffect(() => {
    if (coordinates) {
      setCoords({ lat: coordinates.latitude, lon: coordinates.longitude });
    }
  }, [coordinates]);

  const { isPending: isWeatherLoading, data: weatherData } =
    useSearch<WeatherTypes>(searchQuery, "weather", coords);

  const { data: forecastData } = useSearch<WeatherTypes[]>(
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
    <WeatherContext.Provider
      value={{
        searchQuery,
        coords,
        weatherData,
        forecastData,
        isLoading,
        shouldShowWeather,
        setCoords,
        setSearchQuery,
        handleSearchSubmit,
        handleGeoSearch,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
