import { useWeather } from "@/hooks/useWeather";
import { renderWeatherIcon } from "@/utils/renderWeatherIcon";
export default function WeatherStatus() {
  const { weatherData } = useWeather();
  const now = weatherData?.dt;
  const sunrise = weatherData?.sys.sunrise;
  const sunset = weatherData?.sys.sunset;
  const isDay =
    now !== undefined && sunrise !== undefined && sunset !== undefined
      ? now >= sunrise && now < sunset
      : false;
  const weatherStatus = weatherData?.weather.at(0)?.main;
  const weatherIcon = weatherStatus && renderWeatherIcon(weatherStatus, isDay);
  return (
    <div className="flex flex-col gap-5">
      <h1 className="mt-6 text-4xl font-semibold">
        {weatherData?.name},{" "}
        <span className="font-extralight">{weatherData?.sys.country}</span>
      </h1>
      <h3 className="text-lg text-blue-500">{weatherStatus}</h3>
      <div className="flex flex-row items-center justify-start gap-8">
        {weatherIcon}
        <h2 className="text-5xl">
          {weatherData?.main?.feels_like !== undefined
            ? Math.floor(weatherData.main.feels_like)
            : "--"}
          &deg;C
        </h2>
      </div>
    </div>
  );
}
