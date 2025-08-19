import { useWeather } from "@/hooks/useWeather";
import { cn } from "@/lib/utils";
import { arabicNumberFormater } from "@/utils/arabicNumbersFormater";

interface ForecastDataProps {
  icon: React.ReactNode;
  description: "humidity" | "wind speed" | "precipitation";
  value: number;
}
export default function ForecastData({
  icon,
  description,
  value,
}: ForecastDataProps) {
  const {t,lng} = useWeather()
  return (
    <div dir={lng === "ar"? "rtl":"ltr"} className="mb-4 flex justify-between">
      <p className="flex gap-2 text-sm">
        <span
          className={cn(
            description === "humidity" || description === "precipitation"
              ? "text-humidity-color"
              : "text-wind-color",
          )}
        >
          {icon}
        </span>
        {t(description)}
      </p>
      <p dir={lng === "ar"? "rtl":"ltr"}  className=" capitalize">
        {arabicNumberFormater(value)}
        <span>
        {description === "wind speed" ? t(" Km/h") : "%"}
        </span>
      </p>
    </div>
  );
}
