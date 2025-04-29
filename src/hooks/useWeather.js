import { useState } from "react";

const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [inputCity, setInputCity] = useState("");
    const [error, setError] = useState("Failed to fetch weather data. Enter City name first."); // ✅ show initially
    const apiKey = "aba64ab52ab9448fb4b150533252604";

    const fetchWeather = async (city) => {
        if (!city) return;
        try {
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch weather data. Enter City name first.");
            }
            const data = await response.json();
            setWeather(data);
            setError(null);
        } catch (err) {
            setError(err.message);
            setWeather(null);
        }
    };

    const handleSearch = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            if (inputCity.trim() !== "") {
                fetchWeather(inputCity.trim());
                setInputCity("");
            }
        }
    };

    const handleInputChange = (e) => setInputCity(e.target.value);

    return {
        weather,
        inputCity,
        error,
        handleInputChange,
        handleSearch,
    };
};

export default useWeather;
