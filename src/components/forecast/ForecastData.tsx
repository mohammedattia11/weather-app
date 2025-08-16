import { cn } from "@/lib/utils";

interface ForecastDataProps {
  icon: React.ReactNode;
  description: "Humidity" | "Wind Speed" | "Precipitation";
  value: number;
}
export default function ForecastData({
  icon,
  description,
  value,
}: ForecastDataProps) {
  return (
    <div className="flex justify-between mb-4">
      <p className="flex gap-2 text-sm">
        <span className={cn(description === "Humidity" || description === "Precipitation" ? "text-humidity-color" : "text-wind-color")}>{icon}</span>
        {description}
      </p>
      <p className="">
        {value}
        {description === "Wind Speed" ? " Km/h" : "%"}
      </p>
    </div>
  );
}
