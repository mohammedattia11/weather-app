import { useWeather } from "@/hooks/useWeather";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import SearchInput from "./SearchInput";

export default function SearchField() {
  const { handleSearchSubmit, handleGeoSearch, isLoading, t, lng } =
    useWeather();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearchSubmit(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-main-color/80 grid grid-cols-3 items-center rounded-xl border px-6 py-8 duration-600 hover:border-blue-500/50 lg:mx-auto lg:w-6/12"
      dir={lng === "en" ? "ltr" : "rtl"}
    >
      <div className="col-span-2">
        <SearchInput value={query} onChange={setQuery} />
      </div>
      <div className="flex flex-row items-center justify-end gap-2 w-50">
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-main-color hover:bg-main-color cursor-pointer rounded-xl border p-5 text-stone-400 capitalize duration-300 hover:border-blue-500/50"
        >
          {t("search")}
        </Button>
        <Button
          onClick={handleGeoSearch}
          className="border-secondary-color cursor-pointer border bg-gradient-to-r from-[#151D2C]/90 to-[#102824]/90 px-5 py-4 backdrop-blur-sm"
        >
          <MapPin className="text-stone-300" />
        </Button>
      </div>
    </form>
  );
}
