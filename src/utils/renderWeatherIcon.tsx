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
  switch(value) {
    case "Clear" :
      if(isDay) return <SunComponent/>;
      else return <MoonCloudComponent/>;
    case "Clouds":
      if(isDay) return <CloudComponent/>;
      else return <MoonCloudComponent/>
    case "Rain":
      return <RainComponent/>;
    case "Thunderstorm" :
      return <RainComponent/>
    case "Drizzle":
      return <RainComponent/>;
    case "Snow":
      if(isDay) return <SnowComponent/>;
      else return <SnowComponent isNight={true}/>
    default:
      if(isDay) return <CloudComponent/>
      else return <MoonCloudComponent/>
  }

}