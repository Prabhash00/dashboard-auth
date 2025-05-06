import React from "react";
import { useNavigate } from "react-router-dom";
import useWeather from "../../../hooks/useWeather";

function WeatherPage() {
  const navigate = useNavigate();
  const { weather, inputCity, error, handleInputChange, handleSearch } =
    useWeather();

  return (
    <div className="card-page-sidebar bg-white rounded-lg p-3 w-[750px]">
      <div className="header-weather flex justify-center items-center w-auto">
        <h3 className="header-title p-2">Weather Info</h3>
      </div>
      <div className="input-location ">
        <input
          type="text"
          placeholder="Enter City"
          value={inputCity}
          onChange={handleInputChange}
          onKeyDown={handleSearch}
          className="p-1 border rounded border-blue-500 mr-2 mt-2"
        />
        <button className="button-global mb-3" onClick={handleSearch}>
          Search
        </button>
      </div>

      {error && (
        <div className="text-center mt-4">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      {weather && (
        <>
          <p>
            Weather in{" "}
            <strong>
              {weather.location.name}, {weather.location.region},{" "}
              {weather.location.country}
            </strong>
          </p>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <div className="flex justify-center ">
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
            />
          </div>
          <p>Wind Speeds: {weather.current.wind_kph} kmph</p>
          <p>Humidity: {weather.current.humidity}</p>
          <p>Precipitation: {weather.current.precip_mm} mm</p>
          <p>Feels Like: {weather.current.feelslike_c}°C</p>
          <p>Last Updated: {weather.current.last_updated}</p>
        </>
      )}

      <button
        className="button-global mt-6"
        onClick={() => navigate("/dashboard")}
      >
        Back
      </button>
    </div>
  );
}

export default WeatherPage;
