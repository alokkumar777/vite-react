import React, { useState } from "react";
import { Search } from "lucide-react";

const WeatherForm = ({ location, setLocation, onSearch }) => {
  const [inputValue, setInputValue] = useState(location);

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setLocation(inputValue.trim());
      onSearch();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Enter city name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full px-6 py-4 pr-14 text-lg bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
        />
        <button
          onClick={handleSubmit}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-xl transition-all duration-200 backdrop-blur-sm"
        >
          <Search size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default WeatherForm;
