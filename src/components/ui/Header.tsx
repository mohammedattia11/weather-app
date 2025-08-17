import { Globe, Thermometer } from "lucide-react";
import MoonCloudComponent from "../cosmic/MoonCloudComponent";
import { Button } from "./button";

export default function Header() {
  return <div className="hover: bg-main-color/80 flex w-full flex-row items-center justify-between gap-5 rounded-xl border px-6 py-8 duration-600 hover:border-blue-500/50 lg:mx-auto lg:w-10/12">
    <div className="flex flex-row gap-2">
      <MoonCloudComponent size={60}/>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold bg-gradient-to-r from-[#2C73DE] from-[0%] to-[#7DE66F] to-[40%] bg-clip-text text-transparent">AuroraCast</h1>
        <p>Cosmic Weather Experience</p>
      </div>
    </div>
    <div className="flex flex-row gap-3">
        <Button className="bg-main-color hover:bg-main-color cursor-pointer rounded-xl border p-5 text-stone-400 capitalize duration-300 hover:border-blue-500/50">
          <Thermometer/>
        </Button>
        <Button className=" text-lg border-secondary-color cursor-pointer border text-stone-300 bg-gradient-to-r from-[#151D2C]/90 to-[#102824]/90 px-4 py-5 backdrop-blur-sm"> <span><Globe className="text-stone-300" /></span> en</Button>
    </div>
  </div>;
}
