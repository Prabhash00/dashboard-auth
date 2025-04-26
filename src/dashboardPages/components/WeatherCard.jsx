import React, { useEffect, useState } from "react";

function WeatherCard() {
  const [weather, setWeather] = useState();
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState();
  const apiKey = "aba64ab52ab9448fb4b150533252604";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );
        if (!response.ok) {
          throw new Error(
            "Failed to fetch weather data. Enter City name first."
          );
        }
        const data = await response.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [city]);

  const handleInputChange = (e) => {
    setInputCity(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "Click") {
      if (inputCity.trim() !== "") {
        setCity(inputCity.trim());
      }
    }
  };

  return (
    <div className="card-inner-weather">
      <div className="input-location">
        <h3>Weather</h3>
        <br />
        <input
          type="text"
          placeholder="Enter City"
          value={inputCity}
          onChange={handleInputChange}
          onKeyDown={handleSearch}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <br />
      {error && (
        <p>
          <strong>Error</strong>: {error}
        </p>
      )}
      {weather && (
        <div>
          <p>
            Weather in{" "}
            <strong>
              {weather.location.name}, {weather.location.region},{" "}
              {weather.location.country}
            </strong>
          </p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <div className="flex justify-center">
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
            />
          </div>
          <p>Wind Speeds: {weather.current.wind_kph} kmph</p>
          <p>Humidity: {weather.current.humidity}</p>
          <p>UV Index: {weather.current.uv}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
