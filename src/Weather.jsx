import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "./api/weatherService";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";

const Weather = () => {
  const [location, setLocation] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async (searchLocation = location) => {
    if (!searchLocation.trim()) {
      setError("Please enter a valid city name");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherData(searchLocation);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "Failed to fetch weather data");
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    getWeather();
  }, []);

  const handleSearch = () => {
    getWeather(location);
  };

  const handleRetry = () => {
    getWeather();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-4">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Weather App
          </h1>
          <p className="text-white/80 text-xl">
            Get real-time weather information for any city
          </p>
        </div>

        {/* Search Form */}
        <WeatherForm
          location={location}
          setLocation={setLocation}
          onSearch={handleSearch}
        />

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {loading && <LoadingSpinner />}

          {error && !loading && (
            <ErrorMessage error={error} onRetry={handleRetry} />
          )}

          {weatherData && !loading && !error && (
            <WeatherDisplay weatherData={weatherData} />
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-white/60">
          <p>Developed By - Alok Kumar</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
