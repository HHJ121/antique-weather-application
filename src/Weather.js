import React, { useState } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [searchloaded, setSearchLoaded] = useState(false);
  const [weatherOverview, setWeatherOverview] = useState("");

  function displayWeatherOverview(response) {
    setSearchLoaded(true);
  }

  function search(city) {
    const apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeatherOverview);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (searchloaded) {
    return (
      <div className="Weather">
        <Typewriter
          options={{
            strings: [
              "Hello.",
              "Welcome to my weather app.",
              "Where would you like to look up the weather?",
            ],
            autoStart: true,
            loop: true,
            pauseFor: 1800,
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
  } else {
    search();
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
