import React from "react";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1 className="city">{props.data.cityName}, {props.data.country}</h1>
        </div>
    )
}