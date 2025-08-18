import CloudComponent from "@/components/cosmic/CloudComponent";
import MoonCloudComponent from "@/components/cosmic/MoonCloudComponent";
import RainComponent from "@/components/cosmic/RainComponent";
import SnowComponent from "@/components/cosmic/SnowComponent";
import SunComponent from "@/components/cosmic/SunComponent";
import type { JSX } from "react";
type WeatherMain =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Atmosphere"
  | "Clear"
  | "Clouds";
export function renderWeatherIcon(value:WeatherMain, isDay:boolean=true):JSX.Element | undefined {
  if(value === "Clear" && isDay) return <SunComponent/>
  if(value === "Clear" && !isDay) return <MoonCloudComponent/>
  if(value === "Clouds" && isDay) return <CloudComponent/>
  if(value === "Clouds" && !isDay) return <MoonCloudComponent/>
  if(value === "Rain") return <RainComponent/>
  if(value === "Thunderstorm") return <RainComponent/>
  if(value === "Drizzle") return <RainComponent/>
  if(value === "Snow" && isDay) return <SnowComponent/>
  if(value === "Snow" && !isDay) return <SnowComponent isNight={true}/>
}