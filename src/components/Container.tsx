import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import SearchInput from "./ui/SearchInput";
export default function Container() {
  return (
    <div className="flex flex-row items-center  justify-center py-8 px-6 rounded-xl bg-main-color/80 gap-5 w-full lg:w-6/12 lg:mx-auto">
      <div className="w-8/12">
      <SearchInput/>
      </div>
      <div className="flex flex-row justify-center gap-2 items-center w-4/12">
        <Button className="p-6 rounded-xl bg-main-color hover:bg-main-color border hover:border-blue-500/50 duration-300 text-stone-400 capitalize cursor-pointer">
          Search
        </Button>
        <Button className="cursor-pointer bg-gradient-to-r from-[#151D2C]/90 to-[#102824]/90 backdrop-blur-sm py-5 px-4  border border-secondary-color">
          <MapPin className="text-stone-300 " />
        </Button>
      </div>
    </div>
  );
}
