import React, { useState } from "react";

import "./WeatherTempUnit.css";
import AnimatedWeatherIcon from "./AnimatedWeatherIcon";

export default function WeatherTempUnit(props) {
  let [unit, setUnit] = useState("celsius");

  function displayFahrenheitTemp(event) {
    event.preventDefault();

    setUnit("fahrenheit");
  }

  function displayCelsiusTemp(event) {
    event.preventDefault();

    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTempUnit">
        {" "}
        <span className="weatherIcon">
          <AnimatedWeatherIcon iconCode={props.data.weatherIcon} size={43} />
        </span> {" "}
        <span className="current-temp">{props.data.currentTemp}</span>
        <span className="temp-units">
          °C |{" "}
          <a href="/" onClick={displayFahrenheitTemp}>
            °F
          </a>
        </span>
        <div className="description">
          <em>"{props.data.description}"</em>
        </div>
        <div className="feel-like-temp">
          <i className="bi bi-thermometer-half"></i>Feel like:{" "}
          {props.data.feelLikeTemp} °C
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTempUnit">
        <span className="weatherIcon">
          {" "}
          <AnimatedWeatherIcon iconCode={props.data.weatherIcon} size={43} />
        </span>{" "}
        <span className="current-temp">
          {Math.round(props.data.currentTemp * 1.8 + 32)}
        </span>{" "}
        <span className="temp-units">
          <a href="/" onClick={displayCelsiusTemp}>
            °C
          </a>{" "}
          | °F
        </span>
        <div className="description">
          <em>"{props.data.description}"</em>
        </div>
        <div className="feel-like-temp">
          <i className="bi bi-thermometer-half"></i>Feel like:{" "}
          {Math.round(props.data.feelLikeTemp * 1.8) + 32} °F
        </div>
      </div>
    );
  }
}
