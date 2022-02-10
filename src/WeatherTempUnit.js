import React from "react";

import "./WeatherTempUnit.css";

export default function WeatherTempUnit(props) {
    return (
      <div className="WeatherTempUnit">
        <span className="weatherIcon">🌧</span>{" "}
        <span className="current-temp">{props.celsius}</span>{" "}
        <span className="temp-units">
          <a href="/">°C</a> | <a href="/">°F</a>
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
}