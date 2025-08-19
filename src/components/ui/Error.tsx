import { OctagonAlert } from "lucide-react";
interface ErrorPropsType {
  children:string
}
export default function Error({children}:ErrorPropsType) {
  return (
    <div className="bg-main-color/80 flex w-full flex-row items-center justify-start gap-5 rounded-xl border px-6 py-8 duration-600 hover:border-red-500/50 lg:mx-auto lg:w-6/12">
      <OctagonAlert  className="!text-destructive " />
      <div className="flex flex-col">
        <p className="!text-destructive font-semibold text-lg">Error fetching weather data</p>
        <p className="text-stone-300">{children}</p>
      </div>
    </div>
  );
}
