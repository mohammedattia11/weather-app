import { type ForecastWeatherTypes } from "@/types/forecast";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
async function getWeatherData<T>(
  query: string | null,
  type: "weather" | "forecast",
  coords?: { lat: number; lon: number },
): Promise<T> {
  const endpoint =
    type === "weather"
      ? "https://api.openweathermap.org/data/2.5/weather?"
      : "https://api.openweathermap.org/data/2.5/forecast?";
  let url = "";

  if (coords) {
    url = `${endpoint}lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=metric`;
  } else if (query) {
    url = `${endpoint}q=${query}&appid=${API_KEY}&units=metric`;
  } else {
    throw new Error("Either query or coordinates must be provided");
  }

  const response = await axios.get<T>(url);
  if (type === "weather") {
    return response.data;
  } else {
    const forecastData = response.data as ForecastWeatherTypes;
    return forecastData.list
      .filter((item) => item.dt_txt.includes("12:00:00"))
      .slice(0, 5) as T;
  }
}
export default function useSearch<T>(
  query: string | null,
  type: "weather" | "forecast",
  coords?: { lat: number; lon: number },
): UseQueryResult<T> {
  return useQuery({
    queryKey: [type, query, coords],
    queryFn: () => getWeatherData<T>(query, type, coords),
    enabled: !!query || !!coords,
    staleTime: 1000 * 60 * 5,
  });
}
