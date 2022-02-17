import React, { useState } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";

import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WelcomeHeader from "./WelcomeHeader";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherOverview, setWeatherOverview] = useState({
    searchLoaded: false,
  });

  function displayWeatherOverview(response) {
    console.log(response);
    setWeatherOverview({
      searchLoaded: true,
      coordinates: response.data.coord,
      dateTime: response.data.dt,
      currentTemp: Math.round(response.data.main.temp),
      currentMaxTemp: Math.round(response.data.main.temp_max),
      currentMinTemp: Math.round(response.data.main.temp_min),
      feelLikeTemp: Math.round(response.data.main.feels_like),
      cityName: response.data.name,
      description: response.data.weather[0].description,
      weatherIcon: response.data.weather[0].icon,
      windSpeed: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      country: response.data.sys.country,
      timeZoneOffset: response.data.timezone,
    });
  }

  function search(city) {
    const apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeatherOverview);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherOverview.searchLoaded) {
    return (
      <div className="Weather">
        <WelcomeHeader data={weatherOverview} />
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            autoComplete="no"
            autoFocus="on"
            onChange={updateCity}
          />
          <input type="submit" value="🔍" />
        </form>
        <WeatherInfo data={weatherOverview} />
      </div>
    );
  } else {
    search(city);
    return (
      <div className="Weather">
        <Typewriter
          options={{
            strings: [
              "Loading . . . ",
              "Just gathering all the data for you . . .",
              "Thank you for your patience.",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 3000,
          }}
        />
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city"
            autoComplete="no"
            autoFocus="on"
            onChange={updateCity}
          />
          <input type="submit" value="🔍" onSubmit={handleSubmit} />
        </form>
      </div>
    );
  }
}
