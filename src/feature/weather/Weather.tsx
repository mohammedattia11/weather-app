import { useWeather } from "@/hooks/useWeather";
import { cn } from "@/lib/utils";
import WeatherData from "./components/WeatherData";
import WeatherStatus from "./components/WeatherStatus";

export default function Weather() {
  const { lng, t } = useWeather();
  return (
    <>
      <div
        dir={lng === "ar" ? "rtl" : "ltr"}
        className="flex flex-row items-center gap-3 text-stone-300 lg:w-9/12"
      >
        <p className="text-2xl font-semibold capitalize">
          {t("current weather")}
        </p>
        <p className="text-sm">{t("just now")}</p>
      </div>
      <div
        className={cn(
          "from-main-color/80 to-main-color/40 mb-5 flex w-full flex-col gap-10 rounded-3xl bg-gradient-to-r p-6 shadow-[0px_0px_8px_#E1A401] backdrop-blur-sm lg:mx-auto lg:w-9/12 lg:justify-between",
          lng === "en" ? "lg:flex-row" : "lg:flex-row-reverse",
        )}
      >
        <WeatherStatus />
        <WeatherData />
      </div>
    </>
  );
}
