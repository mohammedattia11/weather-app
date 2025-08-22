import { useLocation } from "@/hooks/useLocation";
import useSearch from "@/hooks/useSearch";
import i18n from "@/i18n";
import type { WeatherTypes } from "@/types/weather";
import type { i18n as i18nType, TFunction } from "i18next";
import { createContext, type ReactNode, useEffect, useReducer } from "react";
import { useTranslation } from "react-i18next";

type Coords = { lat: number; lon: number } | undefined;
interface StateTypes {
  searchQuery: string | null;
  coords: Coords | undefined;
  lng: string;
}
type ActionTypes =
  | { type: "SET_SEARCH_QUERY"; payload: string | null }
  | { type: "SET_COORDS"; payload: Coords }
  | { type: "SET_LNG"; payload: string };

interface WeatherContextType {
  searchQuery: string | null;
  coords: Coords;
  weatherData: WeatherTypes | undefined;
  forecastData: WeatherTypes[] | undefined;
  weatherError: Error | null;
  isLoading: boolean;
  shouldShowWeather: boolean;
  lng: string;
  setLng: (value: string) => void;
  setSearchQuery: (value: string) => void;
  setCoords: (value: { lat: number; lon: number } | undefined) => void;
  handleSearchSubmit: (query: string) => void;
  handleGeoSearch: () => void;
  t: TFunction<"translation", undefined>;
  i18n: i18nType;
}
const initialState: StateTypes = {
  searchQuery: null,
  coords: undefined,
  lng: i18n.language,
};
function weatherReducer(state: StateTypes, action: ActionTypes) {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_COORDS":
      return { ...state, coords: action.payload };
    case "SET_LNG":
      return { ...state, lng: action.payload };
  }
}
//eslint-disable-next-line
export const WeatherContext = createContext<WeatherContextType | undefined>(
  undefined,
);
export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const { t, i18n } = useTranslation();
  const [{ searchQuery, coords, lng }, dispatch] = useReducer(
    weatherReducer,
    initialState,
  );
  const {
    getCurrentLocation,
    coordinates,
    isLoading: coordsLoading,
  } = useLocation();

  useEffect(() => {
    if (coordinates) {
      dispatch({
        type: "SET_COORDS",
        payload: { lat: coordinates.latitude, lon: coordinates.longitude },
      });
    }
  }, [coordinates, dispatch]);

  const {
    isPending: isWeatherLoading,
    data: weatherData,
    error: weatherError,
  } = useSearch<WeatherTypes>(searchQuery, "weather", coords);

  const { data: forecastData } = useSearch<WeatherTypes[]>(
    searchQuery,
    "forecast",
    coords,
  );

  const shouldShowWeather = !!(searchQuery || coords);
  const isLoading = (isWeatherLoading && shouldShowWeather) || coordsLoading;

  const handleSearchSubmit = (query: string) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
    dispatch({ type: "SET_COORDS", payload: undefined });
  };

  const handleGeoSearch = () => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: null });
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
        weatherError,
        setLng:(lng) => dispatch({type:"SET_LNG",payload:lng}),
        setCoords:(coords) => dispatch({type:"SET_COORDS",payload:coords}),
        setSearchQuery :(q) => dispatch({type:"SET_SEARCH_QUERY",payload:q}),
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
