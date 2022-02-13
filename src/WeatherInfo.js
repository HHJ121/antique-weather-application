import React, { useState } from "react";

import "./WeatherInfo.css";
import AnimatedWeatherIcon from "./AnimatedWeatherIcon";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  let [unit, setUnit] = useState("celsius");

  function displayFahrenheitTemp(event) {
    event.preventDefault();

    setUnit("fahrenheit");
  }

  function displayCelsiusTemp(event) {
    event.preventDefault();

    setUnit("celsius");
  }

  function showFullDate(time) {
    let currentDate = new Date(props.data.dateTime);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[currentDate.getDay()];
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = months[currentDate.getMonth()];
    let date = currentDate.getDate();
    let year = currentDate.getFullYear();

    return `${day} ${month} ${date} , ${year}`;
  }

  function showTime(time) {
    let currentDate = new Date(props.data.dateTime);
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let currentDateTime = Date().toLocaleString();

    if (hour < 10) {
      hour = `0${hour}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hour} : ${minutes} ${currentDateTime}`;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherInfo">
        <h1 className="city">
          {props.data.cityName} , {props.data.country}
        </h1>
        <div className="date">{showFullDate()}</div>
        <div className="time">Updated at {showTime()}</div>
        <div className="weather-details">
          <span className="weatherIcon">
            <AnimatedWeatherIcon iconCode={props.data.weatherIcon} size={43} />
          </span>{" "}
          <span className="current-temp">{props.data.currentTemp}</span>{" "}
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
            <ul>
              <li>
                <i className="bi bi-wind"></i> Wind: {props.data.windSpeed}{" "}
                km/hr
              </li>
              <li>
                <i className="bi bi-droplet-half"></i> Humidity:{" "}
                {props.data.humidity} %
              </li>
            </ul>
          </div>
          <hr />
          <WeatherForecast coordinates={props.data.coordinates} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherInfo">
        <h1 className="city">
          {props.data.cityName} , {props.data.country}
        </h1>
        <div className="date">{showFullDate()}</div>
        <div className="time">Updated at {showTime()}</div>
        <div className="weather-details">
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
            <ul>
              <li>
                <i className="bi bi-wind"></i> Wind: {props.data.windSpeed}{" "}
                km/hr
              </li>
              <li>
                <i className="bi bi-droplet-half"></i> Humidity:{" "}
                {props.data.humidity} %
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
