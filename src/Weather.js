import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
	function displayForecast(response) {
		alert(
			`The weather in ${response.data.name} is ${response.data.main.temp}°C.`
		);
	}

	let apiKey = "B95f179627c8dd37f41e1be6e3250e19";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
	axios(apiUrl).then(displayForecast);
	return <h2>weather</h2>;
}
