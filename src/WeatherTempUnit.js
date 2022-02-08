import React from "react";

export default function WeatherTempUnit(props) {
    return (
      <span className="WeatherTempUnit">
        {props.celsius} {" "}
        <a href="/">°C</a> |<a href="/">°F</a>
      </span>
    );
}