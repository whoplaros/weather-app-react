import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
	let weatherData = {
		city: "New York",
		country: "United States of America",
		date: "Tuesday 10:00",
		description: "cloudy",
		temperature: 10,
		humidity: 80,
		wind: 15,
	};
	return (
		<div className="Weather">
			<div>
				<h1 className="weatherAppCity">
					<span id="city">{weatherData.city}</span>
				</h1>
				<h2 className="weatheAppCountry">
					<span id="country">{weatherData.country}</span>
				</h2>

				<p className="weatherAppDetails">
					<span id="time">{weatherData.date}</span>,{" "}
					<span id="description">{weatherData.description}</span>
					<br />
					Humidity: <span id="humidity">{weatherData.humidity}</span>%,
					Windspeed: <span id="windspeed">{weatherData.wind}</span> meters/sec
				</p>
			</div>

			<div className="weatherAppTemperatureContainer">
				<div className="icon-wrapper">
					<img resource="" alt="" className="weatherAppIcon" id="icon" />
				</div>
				<div className="weatherAppTemperature" id="temperature">
					19
				</div>
				<div className="weatherAppUnit">°C</div>
			</div>
		</div>
	);
}
