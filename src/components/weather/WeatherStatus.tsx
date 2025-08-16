import SunComponent from "../SunComponent";

export default function WeatherStatus() {
  return (
    <div className="flex flex-col gap-5 ">
      <h1 className="mt-6 text-4xl font-semibold">
        Cairo, <span className="font-extralight">EG</span>
      </h1>
      <h3 className="text-lg text-blue-500">Sunny</h3>
      <div className="flex flex-row gap-8 items-center justify-start">
        <SunComponent />
        <h2 className=" text-5xl">25&deg;C</h2>
      </div>
    </div>
  );
}
