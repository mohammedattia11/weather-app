import CitiesList from "@/components/ui/CitiesList";
import Header from "@/components/ui/Header";
import SearchField from "@/components/ui/SearchField";
import { Particles } from "@/components/ui/particles";
import Forecast from "@/feature/forecast/Forecast";
import Weather from "@/feature/weather/Weather";
import { useWeather } from "@/hooks/useWeather";
import { cn } from "@/lib/utils";

export default function MainLayout() {
  const { shouldShowWeather, weatherData,forecastData,t } = useWeather();
  return (
    <div
      className={cn(
        "bg-background relative flex w-full flex-col items-center justify-center overflow-x-hidden rounded-lg",
        !shouldShowWeather ? "h-screen justify-start" : "",
      )}
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        refresh
      />
      <main className="z-10 container mx-auto flex flex-col gap-4 p-4">
        <Header />
        <SearchField/>
        <CitiesList/>
        {shouldShowWeather && (
          <>
            <div className="flex flex-row items-center gap-3 text-stone-300 lg:mx-auto lg:w-9/12">
              <p className="text-2xl font-semibold capitalize">
                {t("current weather")}
              </p>
              <p className="text-sm">{t("just now")}</p>
            </div>
            {weatherData && <Weather />}
            {forecastData && <Forecast />}
          </>
        )}
      </main>
    </div>
  );
}
