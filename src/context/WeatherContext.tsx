import { useLocation } from "@/hooks/useLocation";
import useSearch from "@/hooks/useSearch";
import type { WeatherTypes } from "@/types/weather";
import type { i18n, TFunction } from "i18next";
import { createContext, type ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Coords = { lat: number; lon: number } | undefined;

interface WeatherContextType {
  searchQuery: string | null;
  coords: Coords;
  weatherData: WeatherTypes | undefined;
  forecastData: WeatherTypes[] | undefined;
  isLoading: boolean;
  shouldShowWeather: boolean;
  lng: string;
  setLng: (value: string) => void;
  setSearchQuery: (value: string) => void;
  setCoords: (value: { lat: number; lon: number } | undefined) => void;
  handleSearchSubmit: (query: string) => void;
  handleGeoSearch: () => void;
  t: TFunction<"translation", undefined>;
  i18n: i18n;
}
//eslint-disable-next-line
export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined,
);
export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  const [coords, setCoords] = useState<Coords>(undefined);
  const [lng, setLng] = useState("en");
  const { getCurrentLocation, coordinates } = useLocation();
  const { t, i18n } = useTranslation();

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
        lng,
        setLng,
        setCoords,
        setSearchQuery,
        handleSearchSubmit,
        handleGeoSearch,
        t,
        i18n,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
