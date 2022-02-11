import React from "react";

import WeatherTempUnit from "./WeatherTempUnit";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
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

  return (
    <div className="WeatherInfo">
      <h1 className="city">
        {props.data.cityName} , {props.data.country}
      </h1>
      <div className="date">{showFullDate()}</div>
      <div className="time">Updated at {showTime()}</div>
      <div className="weather-details">
        
        <WeatherTempUnit data={props.data} />
        <ul>
          <li>
            <i className="bi bi-wind"></i> Wind: {props.data.windSpeed} km/hr
          </li>
          <li>
            <i className="bi bi-droplet-half"></i> Humidity: {props.data.humidity} %
          </li>
        </ul>
      </div>
    </div>
  );
}
