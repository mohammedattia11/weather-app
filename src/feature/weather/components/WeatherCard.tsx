import { useWeather } from "@/hooks/useWeather";
import { cn } from "@/lib/utils";
import { arabicNumberFormater } from "@/utils/arabicNumbersFormater";

interface WeatherCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}
export default function WeatherCard({ title, value, icon }: WeatherCardProps) {
  const { t,lng } = useWeather();
  const dataColors =
    title === "humidity" || title === "الرطوبة"
      ? "text-humidity-color"
      : title === "wind Speed" || title === "سرعة الرياح"
        ? "text-wind-color"
        : title === "pressure" || title === "الضغط الجوي"
          ? "text-stone-200"
          : title === "visibility" || title === "مدى الرؤية"
            ? "text-stone-200"
            : "text-temp-color";
  const dataSigns =
    title === "humidity" || title === "الرطوبة"
      ? "%"
      : title === "wind Speed" || title === "سرعة الرياح"
        ? t(" Km/h")
        : title === "pressure" || title === "الضغط الجوي"
          ? t(" hPa")
          : title === "visibility" || title === "مدى الرؤية"
            ? t(" Km")
            : t("°C");
  return (
    <div dir={lng === "ar"?"rtl":"ltr"} className="bg-main-color/95 flex w-full flex-row items-center gap-4 rounded-2xl px-2 py-4 duration-600 hover:scale-110">
      <div className={cn("text-lg font-semibold", dataColors)}>{icon}</div>
      <div className="flex flex-col">
        <p className="text-stone-300 capitalize">{title}</p>
        <p
          className={cn(
            "text-lg font-semibold",
            title === "humidity" || title === "الرطوبة"
              ? "text-humidity-color"
              : title === "wind Speed" || title === "سرعة الرياح"
                ? "text-wind-color"
                : title === "pressure" || title === "الضغط الجوي"
                  ? "text-stone-200"
                  : title === "visibility" || title === "مدى الرؤية"
                    ? "text-stone-200"
                    : "text-temp-color",
          )}
        >
          {arabicNumberFormater(value)}
          {dataSigns}
        </p>
      </div>
    </div>
  );
}
