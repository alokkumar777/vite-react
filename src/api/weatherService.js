import axios from "axios";

const API_KEY = "e64e1e38eb1628e831aa62f364c8be42"; // Replace with your API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherData = async (location) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: location,
        units: "metric",
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch weather data"
    );
  }
};
