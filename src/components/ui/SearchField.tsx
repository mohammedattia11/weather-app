import { useWeather } from "@/hooks/useWeather";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import SearchInput from "./SearchInput";

export default function SearchField() {
  const { handleSearchSubmit, handleGeoSearch, isLoading, t } = useWeather();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearchSubmit(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="hover: bg-main-color/80 flex w-full flex-row items-center justify-center gap-5 rounded-xl border px-6 py-8 duration-600 hover:border-blue-500/50 lg:mx-auto lg:w-6/12"
    >
      <div className="w-8/12">
        <SearchInput value={query} onChange={setQuery} />
      </div>
      <div className="flex w-4/12 flex-row items-center justify-center gap-2">
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-main-color hover:bg-main-color cursor-pointer rounded-xl border p-5 text-stone-400 capitalize duration-300 hover:border-blue-500/50"
        >
          {t("search")}
        </Button>
        <Button
          onClick={handleGeoSearch}
          className="border-secondary-color cursor-pointer border bg-gradient-to-r from-[#151D2C]/90 to-[#102824]/90 px-4 py-5 backdrop-blur-sm"
        >
          <MapPin className="text-stone-300" />
        </Button>
      </div>
    </form>
  );
}
