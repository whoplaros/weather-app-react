import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";

export default function WeatherSearch() {
	const [city, setCity] = useState("");
	const [loaded, setLoaded] = useState(false);
	const [weather, setWeather] = useState({});

	function displayWeather(response) {
		setLoaded(true);
		setWeather({
			temperature: Math.round(response.data.main.temp),
			description: response.data.weather[0].description,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=B95f179627c8dd37f41e1be6e3250e19&units=metric`;
		axios.get(apiURL).then(displayWeather);
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	let form = (
		<form className="searchForm" id="searchForm" onSubmit={handleSubmit}>
			<input
				type="search"
				placeholder="Enter a city..."
				required
				className="search-form-input"
				id="search=form-input"
				onChange={updateCity}
			/>
			<input type="submit" value="Search" className="search-form-button" />
		</form>
	);

	// if (loaded) {
	// 	return (
	// 		<div>
	// 			{form}
	// 			<ul>
	// 				<li>Temperature: {Math.round(weather.temperature)}°C</li>
	// 				<li>Description: {weather.description}</li>
	// 				<li>Humidity: {weather.humidity}%</li>
	// 				<li>Wind Speed: {weather.wind} km/h</li>
	// 				<li>
	// 					<img src={weather.icon} alt={weather.description} />{" "}
	// 				</li>
	// 			</ul>
	// 		</div>
	// 	);
	// } else {
	return <div>{form}</div>;
	// }
}
