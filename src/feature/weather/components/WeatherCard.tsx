import { cn } from "@/lib/utils";

interface WeatherCardProps {
  title: "degree" | "humidity" | "wind Speed" | "pressure" | "visibility";
  value: number;
  icon: React.ReactNode;
}
export default function WeatherCard({ title, value, icon }: WeatherCardProps) {
  return (
    <div className="bg-main-color/95 flex w-full flex-row items-center gap-4 rounded-2xl px-2 py-4 duration-600 hover:scale-110">
      <div
        className={cn(
          "text-lg font-semibold",
          title === "humidity"
            ? "text-humidity-color"
            : title === "wind Speed"
              ? "text-wind-color"
              : title === "pressure"
                ? "text-stone-200"
                : title === "visibility"
                  ? "text-stone-200"
                  : "text-temp-color",
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-stone-300 capitalize">{title}</p>
        <p
          className={cn(
            "text-lg font-semibold",
            title === "humidity"
              ? "text-humidity-color"
              : title === "wind Speed"
                ? "text-wind-color"
                : title === "pressure"
                  ? "text-stone-300"
                  : title === "visibility"
                    ? "text-stone-300"
                    : "text-temp-color",
          )}
        >
          {value}
          {title === "humidity"
            ? "%"
            : title === "wind Speed"
              ? " Km/h"
              : title === "pressure"
                ? " hPa"
                : title === "visibility"
                  ? " Km"
                  : "°C"}
        </p>
      </div>
    </div>
  );
}
