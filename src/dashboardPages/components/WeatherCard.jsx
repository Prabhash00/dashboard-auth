import React from "react";
import useWeather from "../../hooks/useWeather";

function WeatherCard() {
  const { weather, inputCity, error, handleInputChange, handleSearch } =
    useWeather();

  return (
    <div className="card-inner-weather">
      <div className="input-location mt-4">
        <input
          type="text"
          placeholder="Enter City"
          value={inputCity}
          onChange={handleInputChange}
          onKeyDown={handleSearch}
          className="p-1 border rounded border-blue-500 mr-2"
        />
        <button className="button-global" onClick={handleSearch}>
          Search
        </button>
      </div>
      <br />

      {error && (
        <div className="text-center mt-4">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
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
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
