import React from "react";
import { Cloud, Sun, CloudRain } from "lucide-react";

const WeatherIcon = ({ weather, size = 64 }) => {
  const iconProps = { size, className: "drop-shadow-lg" };

  switch (weather?.main) {
    case "Clear":
      return <Sun {...iconProps} className="text-yellow-500 drop-shadow-lg" />;
    case "Clouds":
      return <Cloud {...iconProps} className="text-gray-400 drop-shadow-lg" />;
    case "Rain":
      return (
        <CloudRain {...iconProps} className="text-blue-500 drop-shadow-lg" />
      );
    default:
      return <Sun {...iconProps} className="text-yellow-500 drop-shadow-lg" />;
  }
};

export default WeatherIcon;
