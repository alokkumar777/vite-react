import React from "react";
import { MapPin, Thermometer, Droplets, Wind, Eye, Gauge } from "lucide-react";
import WeatherIcon from "./WeatherIcon";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Weather Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-6 border border-white/20 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={20} className="text-white/80" />
              <h2 className="text-3xl font-bold text-white">
                {weatherData.name}
                {weatherData.sys?.country && (
                  <span className="text-xl font-normal text-white/70 ml-2">
                    {weatherData.sys.country}
                  </span>
                )}
              </h2>
            </div>
            <p className="text-white/80 capitalize text-lg">
              {weatherData.weather?.[0]?.description || "Clear sky"}
            </p>
          </div>
          <WeatherIcon weather={weatherData.weather?.[0]} size={80} />
        </div>

        <div className="text-center mb-6">
          <div className="text-7xl font-bold text-white mb-2">
            {Math.round(weatherData.main?.temp || 0)}°
          </div>
          <div className="text-white/70 text-lg">
            Feels like{" "}
            {Math.round(
              weatherData.main?.feels_like || weatherData.main?.temp || 0
            )}
            °
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
          <Thermometer className="text-red-400 mx-auto mb-3" size={32} />
          <div className="text-white/70 text-sm mb-1">Temperature</div>
          <div className="text-white text-2xl font-bold">
            {Math.round(weatherData.main?.temp || 0)}°C
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
          <Droplets className="text-blue-400 mx-auto mb-3" size={32} />
          <div className="text-white/70 text-sm mb-1">Humidity</div>
          <div className="text-white text-2xl font-bold">
            {weatherData.main?.humidity || 0}%
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
          <Wind className="text-green-400 mx-auto mb-3" size={32} />
          <div className="text-white/70 text-sm mb-1">Wind Speed</div>
          <div className="text-white text-2xl font-bold">
            {weatherData.wind?.speed || 0} m/s
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
          <Gauge className="text-purple-400 mx-auto mb-3" size={32} />
          <div className="text-white/70 text-sm mb-1">Pressure</div>
          <div className="text-white text-2xl font-bold">
            {weatherData.main?.pressure || 0} hPa
          </div>
        </div>
      </div>

      {/* Additional Info */}
      {weatherData.visibility && (
        <div className="mt-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="flex items-center justify-center gap-2">
            <Eye className="text-white/70" size={20} />
            <span className="text-white/70">Visibility:</span>
            <span className="text-white font-semibold">
              {(weatherData.visibility / 1000).toFixed(1)} km
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
