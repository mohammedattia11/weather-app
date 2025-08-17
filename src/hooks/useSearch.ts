import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
async function getWeatherData<T>(
  query: string,
  type: "weather" | "forecast",
): Promise<T> {
  const endpoint =
    type === "weather"
      ? "https://api.openweathermap.org/data/2.5/weather?"
      : "https://api.openweathermap.org/data/2.5/forecast?";
  const response = await axios.get<T>(
    `${endpoint}q=${query}&appid=${API_KEY}&units=metric`,
  );
  return response.data;
}
export default function useSearch<T>(
  query: string,
  type: "weather" | "forecast",
): UseQueryResult<T> {
  return useQuery({
    queryKey: [type, query],
    queryFn: () => getWeatherData<T>(query, type),
    enabled: query.length > 0,
    staleTime: 1000 * 60 * 5,
  });
}
