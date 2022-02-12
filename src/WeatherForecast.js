import React, { useState, useEffect } from "react";
import AnimatedWeatherIcon from "./AnimatedWeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [forecastLoaded, setForecastLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(" ");

  useEffect(() => {
    setForecastLoaded(false);
  }, [props.coordinates]);

  function loadForecast() {
    let apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeatherForecastData);
  }

  function showWeatherForecastData(response) {
    setForecastData(response.data.daily);
    setForecastLoaded(true);
  }

  if (forecastLoaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecastData.map((dailyForecast, index) => {
            if (index > 0 && index < 5) {
              return (
                <div key={index}>
                  <div className="col forecast-day">
                    {() => {
                      let forecastDay = new Date(dailyForecast.dt * 1000);
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
                    }}
                  </div>
                  <div className="col forecast-weather-icon">
                    <AnimatedWeatherIcon
                      iconCode={dailyForecast.weather[0].icon}
                      size={35}
                    />
                  </div>

                  <div className="col forecast-temp">
                    <span className="max-temp">
                      {Math.round(dailyForecast.temp.max)}°
                    </span>{" "}
                    |{" "}
                    <span className="min-temp">
                      {Math.round(dailyForecast.temp.min)}°
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    loadForecast();

    return null;
  }
}
