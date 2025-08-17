import { Button } from "./ui/button";
interface CitiesListProps {
  setSearchQuery: (value: string) => void;
}
export default function CitiesList({ setSearchQuery }: CitiesListProps) {
  return (
    <div className="flex w-full flex-col gap-1 lg:mx-auto lg:w-6/12">
      <p className="text-stone-300">Popular cities</p>
      <div className="grid w-full grid-cols-3 gap-6 p-4 sm:grid-cols-6">
        <Button
          onClick={() => setSearchQuery("new york")}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          new york
        </Button>
        <Button
          onClick={() => setSearchQuery("london")}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          london
        </Button>
        <Button
          onClick={() => setSearchQuery("tokyo")}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          tokyo
        </Button>
        <Button
          onClick={() => setSearchQuery("paris")}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          paris
        </Button>
        <Button
          onClick={() => setSearchQuery("dubai")}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          dubai
        </Button>
        <Button
          onClick={() => setSearchQuery("sydney")}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          sydney
        </Button>
      </div>
    </div>
  );
}
