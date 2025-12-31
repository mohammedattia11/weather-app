# Weather App

![header](/public/readme_header.png)

A weather dashboard application built with **React** and **TypeScript**, using **OpenWeatherMap** for data and **OpenStreetMap** for location services.

## Features

- **Current Weather**: View temperature, humidity, wind speed, and pressure.
- **5-Day Forecast**: Forecasts for upcoming days.
- **Geolocation**: Auto-detects current location.
- **Search**: City-based weather lookup.
- **Internationalization**: Support for English and Arabic (RTL).
- **Dark Mode**: Built-in theme switching.

## Tech Stack

- **Core**: React, TypeScript, Vite
- **Styling**: Tailwind CSS (v4), Radix UI
- **State/Async**: TanStack Query, Context API, Axios
- **I18n**: i18next
- **Icons**: Lucide React

## Architecture

The project uses a feature-based folder structure. `WeatherContext` handles global application state (search query, user coordinates, language), while custom hooks encapsulate logic:

- `useSearch`: Wraps React Query for fetching weather/forecast data.
- `useLocation`: Manages browser geolocation and reverse geocoding.

## Folder Structure

```
src/
├── components/    # Shared UI components
├── context/       # Global providers (State, Theme)
├── feature/       # Feature-specific logic (weather, forecast)
├── hooks/         # Custom hooks (data fetching, location)
├── lib/           # Utilities
├── types/         # TypeScript definitions
└── App.tsx
```

## Setup

1.  **Install dependencies**

    ```bash
    pnpm install
    ```

2.  **Configure Environment**
    Create a `.env` file:

    ```env
    VITE_API_KEY=your_api_key
    ```

3.  **Run Development Server**

    ```bash
    pnpm dev
    ```

4.  **Build**
    ```bash
    pnpm build
    ```

## Environment Variables

| Variable       | Description            |
| :------------- | :--------------------- |
| `VITE_API_KEY` | OpenWeatherMap API Key |
