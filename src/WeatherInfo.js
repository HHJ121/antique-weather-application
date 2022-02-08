import React from "react";

import WeatherTempUnit from "./WeatherTempUnit";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1 className="city">
          {props.data.cityName}, {props.data.country}
        </h1>
        <span className="weatherIcon">🌧</span> {" "}
        <span className="current-temp">
          <WeatherTempUnit celsius={props.data.currentTemp} />
        </span>
      </div>
    );
}