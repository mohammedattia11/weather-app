import { useWeather } from "@/hooks/useWeather";
import { Button } from "./button";
export default function CitiesList() {
  const {setSearchQuery,setCoords,t} = useWeather();
  return (
    <div className="flex w-full flex-col gap-1 lg:mx-auto lg:w-6/12">
      <p className="text-stone-300 capitalize">{t("popular cities")}</p>
      <div className="grid w-full grid-cols-3 gap-6 p-4 sm:grid-cols-6">
        <Button
          onClick={() => {
            setSearchQuery("new york");
            setCoords(undefined);
          }}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          {t("new york")}
        </Button>
        <Button
          onClick={() => {
            setSearchQuery("london");
            setCoords(undefined);
          }}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          {t("london")}
        </Button>
        <Button
          onClick={() => {
            setSearchQuery("tokyo");
            setCoords(undefined);
          }}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          {t("tokyo")}
        </Button>
        <Button
          onClick={() => {
            setSearchQuery("paris");
            setCoords(undefined);
          }}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          {t("paris")}
        </Button>
        <Button
          onClick={() => {
            setSearchQuery("dubai");
            setCoords(undefined);
          }}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          {t("dubai")}
        </Button>
        <Button
          onClick={() => {
            setSearchQuery("sydney");
            setCoords(undefined);
          }}
          className="from-main-color/50 to-main-color/20 cursor-pointer rounded-xl bg-gradient-to-r text-sm text-stone-300 capitalize"
        >
          {t("sydney")}
        </Button>
      </div>
    </div>
  );
}
