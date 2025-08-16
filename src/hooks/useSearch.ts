import type { CurrentWeatherTypes } from "@/types/weather";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
async function getWeatherData(query: string): Promise<CurrentWeatherTypes> {
  const response = await axios.get<CurrentWeatherTypes>(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
  );
  return response.data;
}
export default function useSearch(
  query: string
): UseQueryResult<CurrentWeatherTypes> {
  return useQuery({
    queryKey: ["weather", query],
    queryFn: () => getWeatherData(query),
    enabled: query.length > 0,
    staleTime: 1000 * 60 * 5,
  });
}
