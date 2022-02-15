import React, { useState, useEffect } from "react";
import AnimatedWeatherIcon from "./AnimatedWeatherIcon";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [forecastLoaded, setForecastLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(" ");

  function showWeatherForecastData(response) {
    setForecastData(response.data.daily);
    setForecastLoaded(true);
    console.log(response);
  }
  
   useEffect(() => {
    setForecastLoaded(false);
  }, [props.coordinates]);
  
  function loadForecast() {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = "c0d5182ce71bc2be9c80f43da3c8ee07";

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeatherForecastData);
  }

  if (forecastLoaded) {
    return (
      <div className="WeatherForecast">
        
          {forecastData.map((dailyForecast, index) => {
            if (index > 0 && index < 5) {
              return (
                <div className="row" key={index}>
                  <div className="col-5 forecast-day">
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                  <div className="col-2 forecast-weather-icon">
                    <AnimatedWeatherIcon
                      iconCode={dailyForecast.weather[0].icon}
                      size={35}
                    />
                  </div>

                  <div className="col-5 forecast-temp">
                    <span className="max-temp">
                      {Math.round(dailyForecast.temp.max)}°
                    </span>{" "}
                    ||{" "}
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
      
    );
  } else {
    loadForecast();

    return null;
  }
}
