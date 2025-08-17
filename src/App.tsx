import { WeatherProvider } from "./context/WeatherContext";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <WeatherProvider>
      <MainLayout />
    </WeatherProvider>
  );
}
