import { cn } from "@/lib/utils";

interface WeatherCardProps {
  title: "degree" | "humidity" | "wind Speed" | "pressure" | "visibility";
  value: string;
  icon: React.ReactNode;
}
export default function WeatherCard({ title, value, icon }: WeatherCardProps) {
  return (
    <div className="flex flex-row bg-main-color/95 py-4 px-2 gap-4 items-center rounded-2xl w-full hover:scale-110  duration-600">
      <div className={cn("font-semibold text-lg",title === "humidity"?"text-humidity-color":title==="wind Speed"?" text-wind-color":title==="pressure"?"text-stone-200":title==="visibility"?"text-stone-200":"text-temp-color")}>{icon}</div>
      <div className="flex flex-col">
        <p className="capitalize text-stone-300">{title}</p>
        <p className={cn("font-semibold text-lg",title === "humidity"?"text-humidity-color":title==="wind Speed"?" text-wind-color":title==="pressure"?"text-stone-300":title==="visibility"?"text-stone-300":"text-temp-color")}>{value}{title === "humidity"?"%":title==="wind Speed"?" Km/h":title==="pressure"?" hPa":title==="visibility"?" Km":"°C"}</p>
      </div>
    </div>
  );
}
