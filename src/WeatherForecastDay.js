import React from "react";

export default function WeatherForecastDay(props) {
  function forecastDay() {
    let forecastDay = new Date(props.data.dt * 1000);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[forecastDay.getDay()];

    return `${day}`;
  }

  return <div className="WeatherForecastDay">{forecastDay()}</div>;
}
