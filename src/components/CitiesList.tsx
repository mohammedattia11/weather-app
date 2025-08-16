import { Button } from "./ui/button";
interface CitiesListProps {
  setSearchQuery:(value:string)=>void
}
export default function CitiesList({setSearchQuery}:CitiesListProps) {
  return (
    <div className="flex flex-col gap-1 w-full lg:w-6/12 lg:mx-auto">
      <p className="text-stone-300">Popular cities</p>
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 p-4 w-full">
        <Button onClick={() => setSearchQuery("new york")} className="rounded-xl bg-gradient-to-r from-main-color/50 to-main-color/20 text-stone-300 capitalize text-sm cursor-pointer">new york</Button>
        <Button onClick={() => setSearchQuery("london")} className="rounded-xl bg-gradient-to-r from-main-color/50 to-main-color/20 text-stone-300 capitalize text-sm cursor-pointer">london</Button>
        <Button onClick={() => setSearchQuery("tokyo")} className="rounded-xl bg-gradient-to-r from-main-color/50 to-main-color/20 text-stone-300 capitalize text-sm cursor-pointer">tokyo</Button>
        <Button onClick={() => setSearchQuery("paris")} className="rounded-xl bg-gradient-to-r from-main-color/50 to-main-color/20 text-stone-300 capitalize text-sm cursor-pointer">paris</Button>
        <Button onClick={() => setSearchQuery("dubai")} className="rounded-xl bg-gradient-to-r from-main-color/50 to-main-color/20 text-stone-300 capitalize text-sm cursor-pointer">dubai</Button>
        <Button onClick={() => setSearchQuery("sydney")} className="rounded-xl bg-gradient-to-r from-main-color/50 to-main-color/20 text-stone-300 capitalize text-sm cursor-pointer">sydney</Button>
      </div>
    </div>
  )
}
